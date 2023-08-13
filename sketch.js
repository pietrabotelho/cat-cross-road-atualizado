function setup() {
  createCanvas(windowWidth,400);
  iniciarAtor();
  somDaTrilha.loop();
  millis();
}

function draw() {
  background(imagemDaEstrada);
  verificaSeComecaAnimacao();
  if(estaAnimando){
    mostraAnimacao();
  } else {
    mostraAtor();
  }
   frame += 0.1
  if(frame>7){
    frame = 0
  }
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  
}









