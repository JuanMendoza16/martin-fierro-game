export function PhaserConfig({ width=800, height=600, parent='game-container', scenes=[] } = {}) {
  return {
    config: {
      type: Phaser.AUTO,
      backgroundColor: '#222222',
      width,
      height,
      parent,
      scene: scenes,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      audio: {
        disableWebAudio: false
      }
    }
  }
}
