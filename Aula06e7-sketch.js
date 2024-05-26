let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
}
  
function palavraAleatoria() {
  let palavras = ["Évelyn", "Érika", "Émilly"];
  return random(palavras);
}

function inicializaCores(){
  background(245);
  fill("red");
  textSize(58);
  textAlign(CENTER,CENTER);
}

function draw() {
  inicializaCores();
  
  let maximo = width;
  let minimo = 0;
   
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
}
