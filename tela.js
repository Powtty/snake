const tela = {
    largura: 800,
    altura: 400,
    cor: "#90ee90",
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0,60,this.largura,this.altura)
    }
}



