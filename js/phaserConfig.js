let resolucion = {
    ancho: 800,
    alto: 600
}; 

function preload() {
    this.load.image("fondo","../img/fondo.jpg");
};       
        
function create() {
    // cubitos de ejemplo
    this.add.rectangle(200, 300, 100, 100, 0xff0000); // cubito rojo
    this.add.rectangle(600, 300, 100, 100, 0x0000ff); // cubito azul
    this.fondo = this.add.image(0,0,"fondo") //Ejemplo
                .setOrigin(0,0)
                .setDisplaySize(resolucion.ancho,resolucion.alto)
                .setDepth(-1);
    // llamadas de las funciones del juego
    // mostrarVerso.call(this);
    // mostrarVidas.call(this);
    // crearOpciones.call(this);
};
        
function update() {
    this.fondo.setDisplaySize(this.scale.width, this.scale.height);

};

export function PhaserConfig() {
    return {
        config: {
            type: Phaser.AUTO,
            width: resolucion.ancho,
            height: resolucion.alto,
            backgroundColor: '#333333',
            scene: {
                preload: preload,
                create: create,
                update: update
            },
            scale: {
                mode: Phaser.Scale.RESIZE,  // Permite el ajuste dinámico al redimensionar la ventana
                autoCenter: Phaser.Scale.CENTER_BOTH  // Centra la escena
            }
        }
    }
}

