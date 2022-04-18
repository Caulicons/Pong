function setup() {
  createCanvas(600, 400);
  trilha.loop()
} 

function draw() {
  background(color(50, 50, 50))

  //Funções Bolinhas
  bolinha()

  //Funções Raquetes
  mostraRaquetes()

  movimentaRaquete1()
  movimentaRaquete2()

  verificarColisãoRaquete(xRaquete1, yRaquete1)
  verificarColisãoRaquete(xRaquete2, yRaquete2)
  
  //Placar
  placa()
  contandoPontos()
}

