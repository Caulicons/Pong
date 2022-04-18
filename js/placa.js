//Placa
let placa1 = 0;
let placa2 = 0;

//Funções Placar
function placa() {
  stroke(255)
  textAlign(CENTER)
  textSize(21)
  fill(color(255,140,0))
  rect(150, 10, 40 , 20)
  fill(255)  
  text(placa1, 170, 26)
  fill(color(255,140,0))
  rect(450, 10, 40 , 20)
  fill(255)  
  text(placa2, 470, 26)
}

function contandoPontos() {
  if (xBolinha < 13) {
    placa1 += 1;
    ponto.play()
  }

  if (xBolinha > 585) {
    placa2 += 1
    ponto.play()
  }
}