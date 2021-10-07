var  player;
var playerimg;
var en1,en2,en3,en4,enemy;

function preload(){
  playerimg=loadImage("image/ufo.png")
  en1=loadImage("image/alien.png")
  en2=loadImage("image/alien 2.png")
  en3=loadImage("image/alien3.png")
  en4=loadImage("image/alien4.png")

}


function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  player.addImage("ufo",playerimg)
  player.scale=0.1;

}

function draw() {
  background("black");  
  drawSprites();

  if(keyDown(UP_ARROW)){
   player.velocityY=-4;

  }
  if(keyDown(DOWN_ARROW)){
    player.velocityY=4;
 
   }if(keyDown(LEFT_ARROW)){
    player.velocityX=-4;
 
   }if(keyDown(RIGHT_ARROW)){
    player.velocityX=4;
 
   }if(keyWentUp("up")||keyWentUp("down")||keyWentUp("right")||keyWentUp("left")){
     player.velocityX=0;
     player.velocityY=0;
   }
   spawn_en();
}
function spawn_en(){

if(frameCount%100===0){
  enemy=createSprite(random(50,750),0,50,50);
  enemy.velocityY=4;
}





}