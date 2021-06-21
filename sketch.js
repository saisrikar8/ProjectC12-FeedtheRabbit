var garden,rabbit;
var gardenImg,rabbitImg, edges, appleimg, apple, leafimg, leaf, collectibles;
var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("Apple.png");

  leafimg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  collectibles = createGroup();
}

function draw() {
  background(0);
  
  spawnApplesLeaves();

  if (frameCount > 80 && collectibles.bounceOff(rabbit, destroy)){
    score++;
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  drawSprites();
}

function spawnApplesLeaves(){
  if (frameCount % 80 == 0){
    if (Math.round(random()) == 1){
      apple = createSprite(Math.round(random(30, 370)), 0);
      apple.addImage(appleimg);
      apple.scale = 0.2;
      apple.velocityY = 2;
      collectibles.add(apple);
    }
    else{
      leaf = createSprite(Math.round(random(30, 370)), 0);
      leaf.addImage(leafimg);
      leaf.scale = 0.15;
      leaf.velocityY = 2;
      collectibles.add(leaf);
    }
  }
}

function destroy(sprite1, sprite2){
  sprite1.destroy();
}

