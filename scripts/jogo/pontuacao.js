class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textAlign(LEFT);
    textFont('Arial');
    fill(250, 78, 78);
    textSize(50);
    text(parseInt(this.pontos), width - 150, 40);

  }

  addPonto() {
    this.pontos += 0.5;
  }

}