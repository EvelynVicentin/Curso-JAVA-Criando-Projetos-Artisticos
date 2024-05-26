//AULA 1 = DESENHAR USANDO O MOUSE: CRIA RETANGULOS QUANDO EU CLICO O MOUSE
function setup() {         //INICIA O PROGRAMA
  createCanvas(400, 400);  //CRIA UMA "TELA PARA PINTURA"
  background(245)          //PINTA O FUNDO, A COR VAI DE 0-PRETO A 255-BRANCO
}

function draw() {          //FUNÇÃO DESENHAR
  stroke("blue");        //BORDAS DO DESENHO
  fill("red");           //PREENCHER O DESENHO
  
  //console.log(mouseIsPressed)
  
  if (mouseIsPressed) {               //FUNÇÃO SE
    rect(mouseX, mouseY, 20, 35);     //CRIA UM RETÂNGULO NA POSIÇÃO ONDE ESTÁ O MOUSE
  }
}
