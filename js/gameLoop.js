export function GameLoop(p){

}

function mostrarJuego(p){
    mostrarVerso();
}

function mostrarVerso(p) {
//    mostrar el verso actual
}

function mostrarVidas(p) {
// ver las vidas restantes
}

function mostrarOpciones(p) {
//  mostrar las opciones a elegir entre versos
}

function ganarJuego(p) {
// victoriaaaaaaaaaaaaaa
}

function perderJuego(p) {
// que lástima
}

function manejarSeleccion(opcionElegida) {
if (opcionElegida === versos[versosCompletados].correcto) {
    versosCompletados++;
    if (versosCompletados >= 10) {
        ganarJuego();
    } else {
        mostrarVerso();
        crearOpciones();
    }
} else {
    if (dificultad === 'vidaUnica') {
        versosCompletados = 0;
    } else {
        vidas--;
    }
    if (vidas <= 0) {
        perderJuego();
    } else {
        mostrarVidas();
    }
}
}