var spaceShuttle, spaceShuttleImg
var obstacle1, obtscale2, beltOfObstacles
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8
var alien1img, alien2img, alienattackImg, attackImg, bossImg, bossAttackImg, goldenAttackImg
var obstacle1img, obstacle2img, obstacle3img, obstacle4img, obstacle5img
var bubbleImg, fuelImg, heartImg, shieldImg
var boss, bossImg
var booster1, booster2, boster3, booster4, booster5
var life = 5
var time
var gameState = 0
var bg1, bg2, bg3, bg4, bg5
var button

function preload(){
//loading images 
bg1 = loadImage("background/bg1.jpg");
bg2 = loadImage("background/bg2.jpg");
bg3 = loadImage("background/bg3.jpg");
bg4 = loadImage("background/bg4.jpg");
bg5 = loadImage("background/bg5.jpg");
spaceShuttleImg = loadImage("character/spaceShuttle.png");
buttonImg = loadImage("character/button.jpg")
//loading images for obstacles
obstacle1img = loadImage("character/obstacle1.png")
obstacle2img = loadImage("character/obstacle2.png")
obstacle3img = loadImage("character/obstacle3.png")
obstacle4img = loadImage("character/obstacle4.png")
obstacle5img = loadImage("character/obstacle5.png")
// loading images for aliens
alien1img = loadImage("character/alien1.png")
alien2img = loadImage("character/alien2.png")
bossImg = loadImage("character/boss.png")
// loading attck images
attackImg = loadImage("character/attack.png")
alienattackImg = loadImage("character/alienattack.png")
bossAttackImg = loadImage("character/bossAttack.png")
goldenAttackImg = loadImage("character/goldenattack.png")
// loading images for the boosters 
bubbleImg = loadImage("booster/bubble.png")
fuelImg = loadImage("booster/fuel.png")
heartImg = loadImage("booster/heart.png")
shieldImg = loadImage("booster/shield.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //creating space shuttle
  spaceShuttle = createSprite(displayWidth/2, displayHeight/2 + 200, 100, 100)
  spaceShuttle.addImage(spaceShuttleImg)
  spaceShuttle.scale = 0.35
}

function draw() {
  background(bg1);  
  if(gameState === 0){
  button = createSprite(displayWidth/2, displayHeight/2, 200, 200)
  button.addImage(buttonImg)
  spaceShuttle.visible = false
  if(mousePressedOver(button)){
    gameState = 1
    button.destroy()
    
  }
  }
   if(gameState === 1){
  
    spaceShuttle.visible = true
    if(keyDown(UP_ARROW)){
      spaceShuttle.y -= 10 
    }
    if(keyDown(DOWN_ARROW)){
      spaceShuttle.y +=10
    }
    if(keyDown(RIGHT_ARROW)){
      spaceShuttle.x += 10
    }
    if(keyDown(LEFT_ARROW)){
      spaceShuttle.x -= 10; 
    }
  }
 
 
  
 drawSprites();
}