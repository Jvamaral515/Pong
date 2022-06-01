//vavriáveis Bolinha
let xBolinha = 300
let yBolinha = 200
let dBolinha = 15
let rBolinha = dBolinha / 2 

//variávis velocidade da bolinha
let vXBolinha = 6
let vYBolinha = 6

//variáveis raquete
let xRaquete = 2
let yRaquete = 150
let cRaquete = 10 
let aRaquete = 80

//variáveis RaqueteOponente
let xRaqueteOponente = 588
let yRaqueteOponente = 150
let vyOponente

//pontuação
let meusPontos = 0
let pontosOponente = 0

//sons
let trilha
let ponto
let raquetada

function preload(){
  trilha=loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600,400);
  trilha.loop()
}

function draw() {
  background(0);
  mostrarBolinha()
  movimentoBolinha()
  colisaoBolinha()
  mostraRaquete(xRaquete,yRaquete)
  movimentaRaquete()
  verificaColisaoRaquete()
  mostraRaquete(xRaqueteOponente,yRaqueteOponente)
  movimentaRaqueteOponente()
  colisaoRaqueteOponente()
  placar()
  marcarPontos()
  bolinhaNaoFicaPresa()
}

function mostrarBolinha (){
    circle(xBolinha,yBolinha,dBolinha)
}

function movimentoBolinha(){
  xBolinha += vXBolinha
  yBolinha += vYBolinha
}

function  colisaoBolinha(){
    if (xBolinha + rBolinha > width || 
      xBolinha - rBolinha < 0){
    vXBolinha *= -1
}
  if (yBolinha + rBolinha > height ||
     yBolinha - rBolinha < 0){
    vYBolinha *= -1
  } 
}

function mostraRaquete(x,y){
    rect(x,y,cRaquete,aRaquete)

}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - rBolinha < xRaquete + cRaquete 
&&yBolinha - rBolinha < yRaquete + aRaquete 
&&yBolinha + rBolinha> yRaquete){
    vXBolinha *= -1
    raquetada.play()
  }
}

function colisaoRaqueteOponente() {

  if (xBolinha + rBolinha > xRaqueteOponente && yBolinha + rBolinha < yRaqueteOponente + aRaquete && yBolinha + rBolinha >   yRaqueteOponente - aRaquete) {
    vXBolinha *= -1
    raquetada.play()
  }
}
    
function movimentaRaqueteOponente(){
  vyOponente=yBolinha-yRaqueteOponente-cRaquete/2-30
  yRaqueteOponente+=vyOponente
}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(20)
  fill(color(255,140,0))
  rect (130,8,40,20)
  fill(255)
  text(meusPontos,150,25)
  fill(color(255,140,0))
  rect(430,8,40,20)
  fill(255)
  text(pontosOponente,450,25)
}

function marcarPontos (){
  if (xBolinha > 590){
    meusPontos += 1
    ponto.play()
  }
    if (xBolinha < 10){
    pontosOponente += 1
    ponto.play()
  }
}
  
function bolinhaNaoFicaPresa(){
    if (xBolinha - rBolinha < 0){
    XBolinha = 23
    }
}
















