function preload() {
  imagemCenario = loadImage('imagens/cenario/cena-jogo.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/goku.png');

  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');

  imagemInimigoGrande =
    loadImage('imagens/inimigos/troll.png');

  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

  imagemTelaInicial = loadImage('imagens/cenario/tela-menu.png');

  imagemVida = loadImage('imagens/assets/semente.png');

  fonteTelaInicial = loadFont('imagens/assets/Saiyan-Sans.ttf');



  somDoJogo = loadSound('sons/abertura.m4a');




  somPulo = loadSound('sons/pulo.wav');

  somColisao = loadSound('sons/colisao.wav')

  somGameOver = loadSound('sons/gameOver_sound.mp3');


}