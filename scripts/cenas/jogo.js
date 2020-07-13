class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = [{
        inimigo: 0,
        velocidade: 20

      },
      {
        inimigo: 1,
        velocidade: 15
      },
      {
        inimigo: 1,
        velocidade: 15
      },
      {
        inimigo: 2,
        velocidade: 25
      },
      {
        inimigo: 2,
        velocidade: 25


      }

    ];


  }


  setup() {
    cenario = new Cenario(imagemCenario, 5);

    pontuacao = new Pontuacao();

    vida = new Vida(3, 3);

    personagem = new Personagem(matrizPersonagem,
      imagemPersonagem, 0, 30,
      110, 135, 308, 285);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 102, 10);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 120, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    somDoJogo.loop(0, 1, 0.6);


  }

  mousePressed(event) {
    if (event && numeroDePulos === 2) {
      personagem.pula();
      somPulo.play(0, 1, 0.5);
    }
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somPulo.play(0, 1, 0.5);

    }
  }


  draw() {

    cenario.exibe();
    cenario.move();

    vida.draw();

    pontuacao.exibe();
    pontuacao.addPonto();
    personagem.exibe();



    personagem.aplicaGravidade();



    const linhaAtual = this.mapa[this.indice];

    const inimigo = inimigos[linhaAtual.inimigo];

    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;




    inimigo.exibe();
    inimigo.move();


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();

      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }


    }

    if (personagem.estaColidindo(inimigo)) {


      somColisao.play();
      vida.perdeVida();
      personagem.ficaInvencivel();

      if (vida.vidas === 0) {

        somDoJogo.pause();
        somGameOver.play();
        image(imagemGameOver,
          width / 2 - 200, height / 2.5);

        noLoop();
      }


    }


  }


}