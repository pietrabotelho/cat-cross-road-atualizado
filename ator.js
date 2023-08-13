let yAtor; 
let xAtor; 
let colisao = false;
let meusPontos = 0;

//variáveis para animação da lambida
let ultimoMomentoParado = 0;
const intervaloParaAnimacao = 3000;
let estaAnimando = false;
let tempoDoUltimoUpdate = 0;
let frame = 0;

//funções para a animação

function verificaSeComecaAnimacao(){
  let tempoAtual = millis();
  if(tempoAtual - ultimoMomentoParado > intervaloParaAnimacao){
    estaAnimando = true;
    tempoDoUltimoUpdate = tempoAtual;
    ultimoMomentoParado = tempoAtual;
  }
}

function mostraAnimacao(){
  let frameLargura = animacaoLambida.width / 7
  let frameAltura = animacaoLambida.height
  image(animacaoLambida, xAtor - 20, yAtor - 20, 37, 37, frameLargura * floor(frame), 0, frameAltura, frameAltura);
 
}

//funções para o ator

function mostraAtor(){
  image(imagemDoAtor, xAtor - 20, yAtor - 20, 40, 40);
}

function iniciarAtor(){
  yAtor = 380
  xAtor = windowWidth / 2
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3
    estaAnimando = false;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMoverY()){
      yAtor += 3
      estaAnimando = false;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3
    estaAnimando = false;
    }  
  if(keyIsDown(RIGHT_ARROW)){
      xAtor += 3
    estaAnimando = false;
  }
}  

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 27)
    if(colisao){
      somDaColisao.play()
      iniciarAtor();
      if(pontosMaiorQueZero()){
        meusPontos -= 1
      }
    }
  }
}


function incluiPontos(){
  textSize(25)
  textFont(fontePixelada)
  text(meusPontos, width / 2, 23)
}

function marcaPontos(){
  if(yAtor - 20 < 4){
    meusPontos += 1
    somDoPonto.play()
    iniciarAtor();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMoverY(){
  return yAtor<380
} 