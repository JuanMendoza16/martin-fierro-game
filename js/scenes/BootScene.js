export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // imágenes base
    this.load.image('fondo', 'img/fondo.jpg');
    this.load.image('fondoTexto', 'img/fondo-texto.png');
    this.load.image('menuFondo', 'img/menu-fondo.png');
    this.load.image('guitarraRota', 'img/guitarra-rota.png');
    this.load.image('boton', 'img/boton.png');

    // spritesheets (personajes) - placeholders: cada frame 64x64 (ajustá según tu sprite real)
    this.load.spritesheet('moreno', 'img/moreno_sprites.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('fierro', 'img/fierro_sprites.png', { frameWidth: 64, frameHeight: 64 });

    // audio
    this.load.audio('bgm', 'audio/bgm_payada.mp3');
    this.load.audio('sfx_correct', 'audio/sfx_correct.wav');
    this.load.audio('sfx_wrong', 'audio/sfx_wrong.wav');
    this.load.audio('sfx_risa', 'audio/sfx_risa_moreno.wav');
    this.load.audio('sfx_guitarra_rota', 'audio/sfx_guitarra_rota.wav');

    // fuente web no necesita preload; usaremos estilo CSS font
  }

  create() {
    // animaciones simples
    this.anims.create({
      key: 'moreno_habla',
      frames: this.anims.generateFrameNumbers('moreno', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: 'fierro_habla',
      frames: this.anims.generateFrameNumbers('fierro', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1
    });

    this.scene.start('MenuScene');
  }
}
