var bgImg
var bg
var player, playerImg
var barrierImg
var invisibleGround

function preload() {
  bgImg = loadImage("bg.jpg")
  playerImg = loadImage("running.png")
  barrierImg = loadImage("barrier.png")
}
function setup() {
  createCanvas(800,600);
  bg = createSprite(400, 300)
  bg.addImage(bgImg)
  bg.scale = 2.62
  bg.velocityX = -2
  player = createSprite(100, 400)
  player.addImage(playerImg)
  player.scale = 0.25
  invisibleGround = createSprite(400, 460, 900, 20)
  invisibleGround.visible = false
}

function draw() 
{
  background(0);
  if(bg.x < 0){
    bg.x = bg.width/2
  }
  obstacle()
  if(keyDown("space")){
    player.velocityY = -10
  }
  player.velocityY=player.velocityY+1
  player.collide(invisibleGround)
  drawSprites()
}

function obstacle() {
  if(frameCount%100===0){
    var obstacle = createSprite(750, 420, 20, 20)
    obstacle.addImage(barrierImg)
    obstacle.scale = 0.25
    obstacle.velocityX = -3
  }
}


