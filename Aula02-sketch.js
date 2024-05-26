let cor;                 //LET = FAÇA EXISTIR; CRIE UM ESPAÇO NA MEMÓRIA CHAMADO "COR"
let posicaoHorizontal;   //CRIA UMA VARIAVEL CHAMADA "POSIÇÃO NA HORIZONTAL" PARA ENTENDER ONDE ESTA O MOUSE NO x
let posicaoVertical;     //y

function setup() {
  
  createCanvas(400, 400);
  background(245);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
                        //COLOR = DEFINIR COR
                       //RGB = Red Green Blue = VERMELHO VERDE AZUL
  posicaoHorizontal = 200 //VAI COMEÇAR O DESENHO NO MEIO POIS O TAMANHO DA "TELA DE PINTURA" É 400X400
  posicaoVertical = 200
}

function draw() {
  fill(cor);            //PREENCHER O DESENHO
  stroke(cor) //BORDA DO DESENHO FICA TROCANDO DE COR QUANDO EU PRESSIONO MOUSE
  //triangle(200, 100, 300, 50, 50, 50); //O TRIANGULO PRECISA DE 6 VARIÁVEIS 
  
  circle(posicaoHorizontal, posicaoVertical, 20);
                                    //DESENHAR CÍRCULO NO LUGAR DO MOUSE, DE RAIO 50
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
 }
    if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }
   if(mouseY < posicaoVertical) {
    posicaoVertical --;      //-- SIGNIFICA QUE VAI SEMPRE PEGAR E DIMINUIR 1, TIRAR 1 DO VALOR
 }
   if(mouseY > posicaoVertical) {
   posicaoVertical ++;
 }
   if(mouseIsPressed) {
   cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));  //SE COLOCAR UM QUARTO RANDOM, É A TRANSPARÊNCIA, entre 0 e 100
   }
}
//SHAPE = FORMAS
//PÁGINA https://p5js.org/reference/ = PROCURA AS COIASAS QUE O PROGRAMA FAZ
//RANDON = ALEATÓRIO
//O PLANO CARTESIANO TEM A ORIGEM X=0 E Y=0 NO CANTO SUPERIOR ESQUERDO E AUMENTA X PARA DIREITA E Y AUMENTA PRA BAIXO