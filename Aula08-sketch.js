let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
}
  
function palavraAleatoria() {
  let palavras = ["Mortadela", "Melindroso", "MarceloS2"];
  return random(palavras);
}

function inicializaCores(){
  background(245);
  fill("red");
  textSize(58);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let width = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, width);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}