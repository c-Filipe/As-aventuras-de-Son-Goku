let imagemCenario;

let imagemGameOver;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemVida;

let imagemTelaInicial;
let fonteTelaInicial;

let botaoGerenciador;

let jogo;
let vida;
let numeroDePulos;


let cenaAtual = 'telaInicial';
let cenas;

let telaInicial;
let pontuacao;
let cenario;
let somDoJogo;


let somColisao;
let somPulo;
let somGameOver;

let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;



let matrizInimigo = [];
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 4; j++) {
    matrizInimigo.push([104 * j, 102 * i]);
  }
}



let matrizPersonagem = [];



for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    matrizPersonagem.push([308 * j, 285 * i]);

    if (matrizPersonagem.length === 9) {
      break;
    }
  }

}

let matrizInimigoGrande = [];



for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 5; j++) {

    matrizInimigoGrande.push([400 * j, 400 * i]);

    if (matrizInimigoGrande.length === 29) {
      break;
    }
  }

}



let matrizInimigoVoador = [];

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 3; j++) {

    matrizInimigoVoador.push([200 * j, 150 * i]);

    if (matrizInimigoVoador.length === 17) {
      break;
    }
  }

}

const inimigos = [];