import { VersosFunciones } from "./versos.js";
import { PhaserConfig } from "./phaserConfig.js";
import { GameLoop } from "./gameLoop.js";

let vidas = 3;
let versosCompletados = 0;
let dificultad = 'normal'; // 'exploracion' o 'vidaUnica'

function main(){
    const config = new PhaserConfig().config;
    
    const pantallaJuego = new Phaser.Game(config);
    
    const gameLoop = new GameLoop(pantallaJuego);

}




document.addEventListener("DOMContentLoaded", main);