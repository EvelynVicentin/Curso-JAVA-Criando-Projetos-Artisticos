function setup() {
    createCanvas(400, 400);
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
    let minimo = 1;
    //mouseX, 0, width ==> 0, palavra.length
    
    let palavras = ["Évelyn", "Márcia", "DeAndrade", "Vicentin"];
    let palavra = random(palavras);
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    //console.log(quantidade);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
  }
  
  // Insira aqui uma explicação sobre o código
  
  /*
   Este é um comentário de bloco regular.
   Pode ser usado para explicar o código.
  */
  