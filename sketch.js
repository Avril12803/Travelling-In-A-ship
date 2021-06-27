// creating variables for the sprites and their images
var ship,sea;
var shipImg, seaImg;

function preload(){
// Giving the sprites their animation
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaImg = loadImage("sea.png")
}

function setup(){
  // creating the canvas
  createCanvas(400,400);

  // Giving the sprites their function
   ship = createSprite(70,180,20,20)
   ship.addAnimation("ship",shipImg)
   ship.scale=0.2

   sea= createSprite(10,200,600,10)
   sea.x=sea.width/2
   sea.velocityX=-2
   sea.visible=false
  
}
function draw() {
  background("lightblue");
 



// code to reset background
if (sea.x < 0) {
  sea.x = sea.width / 2
}

ship.collide(sea)
drawSprites()
}