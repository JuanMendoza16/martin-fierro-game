import { obtenerVerso, TOTAL_PARA_GANAR } from '../versos.js';
import { guardarProgreso, cargarProgreso } from '../utils.js';

export default class PlayScene extends Phaser.Scene {
    constructor() { super({ key: 'PlayScene' }); }

    init(data) {
        this.dificultad = data.dificultad || 'normal';
        this.continuar = data.continuar || false;
    }

    preload() {
        this.load.font(
            'PressStart2P',
            'https://raw.githubusercontent.com/google/fonts/refs/heads/main/ofl/pressstart2p/PressStart2P-Regular.ttf',
            'truetype'
        );
    }

    create() {
        const { width, height } = this.scale;
        this.fondo = this.add.image(0, 0, 'fondo').setOrigin(0, 0).setDisplaySize(width, height);

        // estado inicial
        const saved = cargarProgreso();
        if (this.continuar && saved) {
            this.vidas = saved.vidas ?? 3;
            this.versosCompletados = saved.versosCompletados ?? 0;
            this.dificultad = saved.dificultad ?? "normal";
        } else {
            this.VIDAS_MAXIMAS = (this.dificultad === 'vidaUnica') ? 1 : (this.dificultad === 'exploracion' ? Infinity : 3);
            this.vidas = this.VIDAS_MAXIMAS;
            this.versosCompletados = 0;
        }

        // personajes
        this.fierro = this.add.sprite(width * 0.12, height * 0.75, 'fierro').setScale(2);
        this.moreno = this.add.sprite(width * 0.88, height * 0.75, 'moreno').setScale(2);
        this.moreno.play('moreno_habla');
        this.fierro.play('fierro_habla');

        // cuadro de texto
        this.fondoTexto = this.add.image(width / 2, height * 0.18, 'fondoTexto')
            .setDisplaySize(width * 0.6, height * 0.25).setOrigin(0.5);
        this.versoText = this.add.text(width / 2, height * 0.18, '', {
            fontFamily: 'PressStart2P',
            fontSize: 18,
            wordWrap: { width: this.fondoTexto.displayWidth * 0.9 }
        }).setOrigin(0.5);

        // HUD
        this.vidasText = this.add.text(20, 20, '', {
            fontFamily: 'PressStart2P',
            fontSize: 16
        }).setOrigin(0);
        this.updateHUD();

        // botón de menú
        this.btnMenu = this.add.image(width * 0.92, height * 0.08, 'boton').setScale(0.6).setInteractive();
        this.menuText = this.add.text(this.btnMenu.x, this.btnMenu.y, 'Menú', { fontFamily: 'PressStart2P', fontSize: 12 }).setOrigin(0.5);
        this.btnMenu.on('pointerup', () => {
            guardarProgreso({ versosCompletados: this.versosCompletados, vidas: this.vidas, dificultad: this.dificultad });
            this.scene.start('MenuScene')});

        // opciones
        this.opcionesGroup = this.add.group();
        this.crearOpciones();

        // sonidos
        this.sfxCorrect = this.sound.add('sfx_correct', { volume: 0.5 });
        this.sfxWrong = this.sound.add('sfx_wrong', { volume: 0.5 });
        this.sfxRisa = this.sound.add('sfx_risa', { volume: 0.5 });

        // auto-guardado
        this.time.addEvent({
            delay: 2000, loop: true, callback: () => {
                guardarProgreso({ versosCompletados: this.versosCompletados, vidas: this.vidas, dificultad: this.dificultad });
            }
        });

        // evento responsive
        this.scale.on('resize', () => this.reposicionarElementos());
    }

    reposicionarElementos() {
        const { width, height } = this.scale;
        this.fondo.setDisplaySize(width, height);
        this.fondoTexto.setPosition(width / 2, height * 0.18).setDisplaySize(width * 0.7, height * 0.25);
        this.versoText.setPosition(width / 2, height * 0.18);
        this.fierro.setPosition(width * 0.12, height * 0.75);
        this.moreno.setPosition(width * 0.88, height * 0.75);
        this.btnMenu.setPosition(width * 0.92, height * 0.08);
        this.menuText.setPosition(this.btnMenu.x, this.btnMenu.y);
        this.crearOpciones(); //No entiendo que hiciste ._.
    }


    updateHUD() {
        const vidasLabel = (this.dificultad === 'exploracion') ? '∞' : this.vidas;
        this.vidasText.setText(`Vidas: ${vidasLabel}   Versos: ${this.versosCompletados+1}/${TOTAL_PARA_GANAR}`);
    }

    crearOpciones() {
        this.opcionesGroup.clear(true, true);
        const v = obtenerVerso(this.versosCompletados);
        this.versoText.setText(`${v.textoAnterior} ...`);

        const opciones = v.opciones;
        const { width, height } = this.scale;
        const startY = height * 0.45;   
        const spacing = 90;

        opciones.forEach((opText, idx) => {
            const x = width / 2;
            const y = startY + idx * spacing;
            const rect = this.add.rectangle(x, y, width * 0.6, 72, 0xdeb887, 0.6).setStrokeStyle(3, 0x8b5a2b).setInteractive();
            const label = this.add.text(x, y, opText, {
                fontFamily: 'PressStart2P',
                fontSize: 16,
                wordWrap: { width: width * 0.55 }
            }).setOrigin(0.5);
            rect.on('pointerup', () => this.manejarSeleccion(opText, v));
            this.opcionesGroup.addMultiple([rect, label]);
        });
    }

    manejarSeleccion(opcionElegida, versoObj) {
        const correcto = versoObj.opciones[versoObj.correctIndex];
        if (opcionElegida === correcto) {
            this.sfxCorrect.play();
            this.fierro.setTint(0xaaffaa);
            this.time.delayedCall(300, () => this.fierro.clearTint());

            this.versosCompletados++;
            if (this.versosCompletados >= TOTAL_PARA_GANAR) {
                this.scene.start('GameOverScene', { victoria: true,dificultad:this.dificultad});
            } else {
                this.crearOpciones();
                this.updateHUD();
            }
        } else {
            this.sfxWrong.play();
            this.moreno.setTint(0xffaaaa);
            this.sfxRisa.play();
            this.time.delayedCall(400, () => this.moreno.clearTint());
            
            if (this.dificultad !== 'exploracion') {
                this.vidas--;
            }
            if (this.vidas <= 0 && this.dificultad !== 'exploracion') {
                guardarProgreso({ versosCompletados: 0, vidas: this.VIDAS_MAXIMAS, dificultad: this.dificultad });
                this.scene.start('GameOverScene', { victoria: false,dificultad:this.dificultad});

            } else {
                this.updateHUD();
                this.tweens.add({ targets: this.fondoTexto, x: this.fondoTexto.x + 8, duration: 40, yoyo: true, repeat: 3 });
                this.crearOpciones(); // vuelve a intentar el mismo verso
            }
        }
                
    }

}
