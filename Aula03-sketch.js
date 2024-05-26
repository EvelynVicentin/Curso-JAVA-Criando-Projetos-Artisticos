let cor;                 
let circuloX;   
let circuloY;    

function setup() {
  createCanvas(400, 400); //width x height = LARGURAemX por ALTURAemY
  background(245);
  cor = color(random(0, 255), random(0, 255), random(0, 255));   
  circuloX = [0, 0, 0];    //CRIA LISTA ORGANIZADA 
  circuloY = [random(height), random(height), random(height)]; //ESCOLHE NÚMERO ALEATÓRIO DENTRE AS POSSIBILIDADES DA ALTURA DO PAINEL QUE EU ESTABELECI LA NO INÍCIO
}

function draw() {
stroke(0, 0, 0, 0)
  fill(cor);
  for(let contador in circuloX) {
  circle(circuloX[contador], circuloY[contador], 20);
  circuloX[contador] += random(0, 3);
  circuloY[contador] += random(-3, 3);

  if(circuloX[contador] >= width) {
    circuloX[contador] = 0;
    circuloY[contador] = random(height);
  }
  }
  
   if(mouseIsPressed) {
   cor = color(random(0, 255), random(0, 255), random(0, 255), random(50, 100));  
   }
}
