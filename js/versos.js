export function VersosFunciones(){
    return {
        indiceVerso:0,
        versos:  
        [
            {
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id iaculis elit. Suspendisse a congue arcu, faucibus iaculis magna. Vivamus varius feugiat mauris, sed pulvinar orci imperdiet eget. Nam sed ante erat. Phasellus gravida lectus dui, id dignissim turpis bibendum id. Praesent efficitur neque dui, quis pharetra ex fermentum viverra. Sed eu ligula sapien. Sed diam sapien, vulputate vulputate faucibus vitae, faucibus et turpis. Curabitur tristique sollicitudin gravida. Nulla facilisi. Nulla eget massa id urna placerat consectetur. Donec consequat, eros ut mollis fermentum, felis nulla malesuada nulla, et viverra arcu mauris sit amet dui. Etiam hendrerit molestie ante, sit amet viverra nisl elementum in. Suspendisse sed enim suscipit, tempus quam id, porttitor risus.",
                opciones: {"corazón":true, "sueño":false, 
                           "mañana":false, "luna":false}
                // esto versos son de chatgpt, pero van las 3 opciones , la correcta y 2 falopas
            }
        ],

        obtenerVerso(){
            return this.versos[this.indiceVerso];
        },

        siguienteVerso(){
            this.indiceVerso++;
        },

        reiniciarHistoria(){
            this.indiceVerso=0;
        }
    }
}
