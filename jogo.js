function inicioJogo(){
    placar.nomeJogo="Jogo da Cobra"
    placar.pontuacao=0;
    cobra.vida=3;
    cobra.cor="white";
    cobra.velocidade=2;
    trilha.play();
    jogar();
}

function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    apple.desenhar();
    if (apple.teveColisao(cobra)){
        placar.pontuacao+=apple.valor;
        cobra.crescer();
        cobra.velocidade++;
        comida.play();
        apple = new Apple(10);      
    }
    if(placar.pontuacao > 50) {
        placar.nomeJogo = "Você venceu !";
        let imgWin = new Image();
        imgWin.src = "you win.gif";
       ctx.drawImage(imgWin, 200, 100, 200, 200);
    }

    if (cobra.vida > 0){
        requestAnimationFrame(jogar);
    }
    else
    {
        trilha.pause();
        trilha.currentTime=0;
        gameover.play();
        placar.nomeJogo = "Fim de Jogo. Clique na tela para jogar...";
        placar.desenhar()  
    }
   

}

let trilha = new Audio();
trilha.src = "pkmemerald.mp3";
let comida = new Audio();
comida.src = "soundapple.mp3";
let gameover = new Audio();
gameover.src = "lose.mp3";

let apple = new Apple(10);
placar.nomeJogo="Clique na tela para começar o jogo..."
placar.desenhar();
tela.desenhar();

document.addEventListener("click",inicioJogo);
document.addEventListener("keydown",(evento) =>{  
    if ((evento.key== "w") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="cima";      
    if ((evento.key== "d") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="direita";
    if ((evento.key== "s") && (cobra.direcao=="direita"  || cobra.direcao=="esquerda"))   cobra.direcao="baixo";
    if ((evento.key== "a") && (cobra.direcao=="cima"  || cobra.direcao=="baixo"))         cobra.direcao="esquerda";
})


