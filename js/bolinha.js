//Propriedades Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Função Bolinha
function bolinha() {
//Chamando Funções
    mostraBolinha();
    movimentaBolinha();
    verificarColisãoBorda(); 

function mostraBolinha () {
  fill(0)
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
}

function verificarColisãoBorda(){
  if (xBolinha > width - raio - 1|| xBolinha < raio) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha > height - raio || yBolinha < raio) {
    velocidadeYBolinha *= -1;
  }
  
} 

}