import { cargarProgreso } from '../utils.js';

export default class MenuScene extends Phaser.Scene {
    constructor() { super({ key: 'MenuScene' }); }
    
    preload() {
        this.load.font(
            'PressStart2P',
            'https://raw.githubusercontent.com/google/fonts/refs/heads/main/ofl/pressstart2p/PressStart2P-Regular.ttf',
            'truetype'
        );
    }
    create() {
        const { width, height } = this.scale;
        this.menuFondo = this.add.image(0, 0, 'menuFondo').setOrigin(0, 0).setDisplaySize(width, height);

        // botones de modo
        const modos = [
            { key: 'exploracion', text: 'Modo exploración (sin vidas)' },
            { key: 'normal', text: 'Modo clásico (3 vidas)' },
            { key: 'vidaUnica', text: 'Modo duelo (1 vida)' }
        ];

        this.btns = new Array();
        const startY = height * 0.5;
        modos.forEach((m, idx) => {
            const btn = this.add.image(width / 2, startY + idx * 80, 'boton').setScale(2,1).setInteractive();
            const label = this.add.text(btn.x, btn.y, m.text, {
                fontFamily: 'PressStart2P',
                fontSize: 10,
                align: 'center'
            }).setOrigin(0.5);
            btn.on('pointerup', () => {
                this.sound.play('sfx_correct', { volume: 0.3 });
                // pasa la dificultad y va a PlayScene
                this.scene.start('PlayScene', { dificultad: m.key });
            });
            this.btns.push({btn, label});
        });

        // botón continuar si hay progreso
        const progreso = cargarProgreso();
        console.log(this.btns.length);
        if (progreso && typeof progreso.versosCompletados === 'number') {
            const btn = this.add.image(width / 2, height/2 + 80 *this.btns.length+1, 'boton').setScale(1).setInteractive();
            const label = this.add.text(btn.x, btn.y, 'Continuar', { fontFamily: 'PressStart2P', fontSize: 10 }).setOrigin(0.5);
            btn.on('pointerup', () => {
                this.scene.start('PlayScene', { continuar: true });
            });
            this.btns.push({btn, label});
        }

        // música menú
        this.bgm = this.sound.add('bgm', { loop: true, volume: 0.25 });
        if (!this.sound.context.resume) {
            // older browsers
            this.bgm.play();
        } else {
            // resume on first user gesture
            this.input.once('pointerdown', () => {
                if (!this.bgm.isPlaying) this.bgm.play();
            });
        }
        
        this.scale.on("resize", () => this.reposicionarElemntos());
    }

    reposicionarElemntos(){
        const { width, height } = this.scale;
        this.menuFondo.setDisplaySize(width, height);
        this.btns.forEach((el,idx) =>{
            if (idx+1 !== this.btns.length){
                el.btn.setScale(2,1);
            }else{
                el.btn.setScale(1);
            }
            el.btn.setPosition(width / 2, height/2 + idx * 80);
            el.label.setPosition(el.btn.x, el.btn.y);
           }   
        )
    }
}

