export function VersosFunciones(){
    return {
        indiceVerso:0,
        versos:  
        [
            {
                texto: "aaaaaaaaa",

                opciones: {"corazón":true, "sueño":false, 
                           "mañana":false, "luna":false}
                // esto versos son de chatgpt, pero van las 3 opciones , la correcta y 2 falopas
            }
        ],

        obtenerVerso(){
            return this.versos[indiceVerso];
        },

        siguienteVerso(){
            this.indiceVerso++;
        },

        reiniciarHistoria(){
            this.indiceVerso=0;
        }
    }
}
