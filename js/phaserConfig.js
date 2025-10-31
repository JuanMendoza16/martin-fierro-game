let resolucion = {
    ancho:window.innerWidth,
    alto: window.innerHeight
};

let multAlturaFuente = 0.05; //Cuanto espacio ocupa cada letra relativo a la imagen de fondo



function preload() {
    this.load.image("fondo","../img/fondo.jpg");
    this.load.image("fondoTexto", "../img/fondo-texto.jpg");
};       
        
function create() {
    this.fondo = this.add.image(0,0,"fondo") //Ejemplo
                .setOrigin(0,0)
                .setDisplaySize(resolucion.ancho,resolucion.alto)
                .setDepth(-2);
                
    this.fondoTexto = this.add.image(0,0,"fondoTexto") //Ejemplo
                .setDisplaySize(resolucion.ancho/2, resolucion.alto/1.5)
                .setOrigin(0.5)
                .setDepth(-1);

    this.fondoTexto.preFX.addBlur(0,1,1,3, 0xf5c42f,2); //Efecto sepia croto, lo vamos a tener que hacer con phsp
                
    const alturaFuente = Math.floor(this.fondoTexto.displayHeight * multAlturaFuente); // 8% del alto
    this.texto = this.add.text(0,0,"Este es un texto de prueba. Debería ajustarse automáticamente al ancho del fondoTexto, manteniendo márgenes proporcionales y un formato justificado.", 
                              { fontFamily: 'Arial', fontSize: '${alturaFuente}px', fill: '#000000ff' })
                 .setOrigin(0,0)
                 .setPosition(this.fondoTexto.getTopLeft())
                 .setAlign("justify")
                 .setStyle({
                    wordWrap: {
                    width: this.fondoTexto.displayWidth*0.9, // 80% del ancho del fondo
                    useAdvancedWrap: true
                    }
                });
}
        
function update() {

    let alturaCanvas = this.scale.height;
    let anchoCanvas  = this.scale.width; 
    
    this.scale.on("resize", (gameSize) =>{
        
        let posicionFondoTexto = {x:anchoCanvas / 2,
                                  y:alturaCanvas / 2
                            };
                            
                            
                            
        this.fondo.setDisplaySize(anchoCanvas, alturaCanvas);
        
        this.fondoTexto.setDisplaySize(anchoCanvas / 2, alturaCanvas / 1.5)
                       .setPosition(posicionFondoTexto.x, posicionFondoTexto.y);
        
        let esquina = this.fondoTexto.getTopLeft();
        const alturaFuente = Math.floor(this.fondoTexto.displayHeight * multAlturaFuente);
        this.texto.setPosition(esquina.x*1.1,esquina.y*1.1)
                  .setStyle({
                    fontSize: alturaFuente,
                    wordWrap: {
                    width: this.fondoTexto.displayWidth*0.9
                    }});
                            
    });
}


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