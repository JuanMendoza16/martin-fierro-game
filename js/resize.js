function update() {

    let alturaCanvas = this.scale.height;
    let anchoCanvas  = this.scale.width; 
    
    this.scale.on("resize", (gameSize) =>{
        this.fondo.setDisplaySize(anchoCanvas, alturaCanvas);
        reposicionarTexto(alturaCanvas,anchoCanvas,this.fondoTexto,this.texto);
    });
}
