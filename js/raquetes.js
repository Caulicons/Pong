//Propriedades Raquetes
let raqueteAltura = 90;
let raqueteComprimento = 10;

    //Variáveis Raquetes 1
      let xRaquete1 = 5;
      let yRaquete1 = 150;

    //Variáveis Raquetes 2 
      let xRaquete2 = 587;
      let yRaquete2 = 150;

      let velocidadeYRaquete2;

let colidiu = false;

//Funções Raquete
function mostraRaquetes() {
  fill(0)
  rect(xRaquete1, yRaquete1, raqueteComprimento, raqueteAltura);
  rect(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete1(){
  if(keyIsDown(DOWN_ARROW) && yRaquete1 < 295) {
    yRaquete1 += 10
  }
 if(keyIsDown(UP_ARROW) && yRaquete1 > 10) {
    yRaquete1 -= 10
  } 
}

function movimentaRaquete2(){
  velocidadeYRaquete2 = yBolinha - yRaquete2 - raqueteComprimento / 2 - 35;
  yRaquete2 += velocidadeYRaquete2; 
}

function verificarColisãoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio + 2);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play()
  }
}