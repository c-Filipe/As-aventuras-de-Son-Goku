function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);



}

function mousePressed(event) {
  jogo.mousePressed(event);
}


function keyPressed() {
  jogo.keyPressed(key);

}



function draw() {

  frameRate(40);

  cenas[cenaAtual].draw();


}