import { PhaserConfig } from "./phaserConfig.js";
import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import PlayScene from "./scenes/PlayScene.js";
import UIScene from "./scenes/UIScene.js";
import GameOverScene from "./scenes/GameOverScene.js";

const configObj = new PhaserConfig({
  width: window.innerWidth,
  height: window.innerHeight,
  parent: 'game-container',
  scenes: [ BootScene, MenuScene, PlayScene, UIScene, GameOverScene ]
}).config;

window.game = new Phaser.Game(configObj);
