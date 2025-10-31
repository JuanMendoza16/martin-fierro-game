import { VersosFunciones } from "./versos.js";
import { ObtenerMulFuente } from "./utils.js";
const versos = new VersosFunciones();




let resolucion = {
    ancho:window.innerWidth,
    alto: window.innerHeight
};

let multFuentePer = 0.07; //Cuanto espacio ocupa cada letra relativo a la imagen de fondo
let versoActual = versos.obtenerVerso();


function preload() {
    this.load.image("fondo","../img/fondo.jpg");
    this.load.image("fondoTexto", "../img/fondo-texto.jpg");
};       
        
function create() {

    this.fondo = this.add.image(0,0,"fondo") 
                .setOrigin(0,0)
                .setDisplaySize(resolucion.ancho,resolucion.alto)
                .setDepth(-2);
                
    this.fondoTexto = this.add.image(0,0,"fondoTexto") 
                .setDisplaySize(resolucion.ancho/2, resolucion.alto/1.5)
                .setOrigin(0.5,0)
                .setDepth(-1);

    this.fondoTexto.preFX.addBlur(0,1,1,3, 0xfffff,2); 
             
    const alturaFuente = obtenerTamañoLetra(versoActual.texto,this.fondoTexto.displayHeight); 
    
    this.texto = this.add.text(0,0,versoActual.texto, { fontFamily: 'Arial', fontSize: '${alturaFuente}px', fill: '#000000ff' })
                         .setOrigin(0.5)
                         .setPosition(this.fondoTexto.getTopLeft())
                         .setAlign("justify")
                         .setStyle({
                             wordWrap: {
                             width: this.fondoTexto.displayWidth*0.9, 
                             useAdvancedWrap: true
                             }
                         });

    reposicionarTexto(this.scale.height,this.scale.width,this.fondoTexto,this.texto);
}
        
function update() {

    let alturaCanvas = this.scale.height;
    let anchoCanvas  = this.scale.width; 
    
    this.scale.on("resize", (gameSize) =>{
        this.fondo.setDisplaySize(anchoCanvas, alturaCanvas);
        reposicionarTexto(alturaCanvas,anchoCanvas,this.fondoTexto,this.texto);
    });
}

function reposicionarTexto(alturaCanvas, anchoCanvas,fondoTexto,texto){

         let posicionFondoTexto = {
                                    x:anchoCanvas / 2,
                                    y:alturaCanvas*0.05
                                  };
        
        let esquina = fondoTexto.getTopLeft();

        fondoTexto.setDisplaySize(anchoCanvas / 2, alturaCanvas/2)
                  .setPosition(posicionFondoTexto.x, posicionFondoTexto.y);
        

        const alturaFuente = obtenerTamañoLetra(versoActual.texto,fondoTexto.displayHeight); 

        texto.setPosition(esquina.x+fondoTexto.displayWidth/2,esquina.y+fondoTexto.displayHeight/2)
             .setStyle({
                    fontSize: alturaFuente,
                    wordWrap: {
                    width:fondoTexto.displayWidth*0.9
                    }
                });
                            
}

function obtenerTamañoLetra(texto, alturaContenedor){
    let multFuente = texto.length<100 ? 1:0.6;
    return Math.floor( alturaContenedor * multFuentePer* multFuente);
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
                mode: Phaser.Scale.RESIZE,  
                autoCenter: Phaser.Scale.CENTER_BOTH  
            }
        }
    }
}

