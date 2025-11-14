export default class GameOverScene extends Phaser.Scene {
    constructor() { super({ key: 'GameOverScene' }); }

    init(data) {
        this.victoria = data.victoria || false;
        this.dificultad = data.dificultad || "normal";
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
        this.add.image(0, 0, 'menuFondo').setOrigin(0, 0).setDisplaySize(width, height);

        const title = this.victoria ? '¡Has ganado la payada!' : 'El Moreno te ganó la payada';
        const subtitle = this.victoria ? 'Has completado los versos.' : 'Has perdido el contrapunto.';

        this.add.text(width / 2, height * 0.28, title, { fontFamily: 'PressStart2P', fontSize: 18 }).setOrigin(0.5);
        this.add.text(width / 2, height * 0.37, subtitle, { fontFamily: 'PressStart2P', fontSize: 10 }).setOrigin(0.5);

        if (!this.victoria) {
            this.sound.play('sfx_guitarra_rota', { volume: 0.7 });
             // imagen guitarra rota
            this.add.image(width / 2, height * 0.54, 'guitarraRota').setScale(0.7);
        }

        // botones: Reintentar y Volver al menu
        const retry = this.add.image(width / 2 - 120, height * 0.78, 'boton').setScale(1).setInteractive();
        const menu = this.add.image(width / 2 + 120, height * 0.78, 'boton').setScale(1).setInteractive();

        this.add.text(retry.x, retry.y, 'Reintentar', { fontFamily: 'PressStart2P', fontSize: 12 }).setOrigin(0.5);
        this.add.text(menu.x, menu.y, 'Volver al menú', { fontFamily: 'PressStart2P', fontSize: 12 }).setOrigin(0.5);

        retry.on('pointerup', () => {
            this.scene.start('PlayScene', { dificultad:this.dificultad });
        });
        menu.on('pointerup', () => {
            this.scene.start('MenuScene');
        });

        // sfx guitarra rota en caso derrota
        
    }
}
