var bird,birdimage
var obstacles,obstaclesimage
function preload(){
birdimage=loadImage("bird.png")
obstaclesimage=loadImage("paper.png")
function setup (){
  createCanvas(1200, 800);


bird=createSprite(80,315,20,20)
bird.addImage(birdimage)
bird.scale=0.5

gameover=createSprite(600,400,800,400);
gameover.addImage(gameOverImage);

gameover.visible=false;
}

function draw() {}


}