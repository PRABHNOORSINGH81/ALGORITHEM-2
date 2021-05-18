var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(12,34,36,48)
  o2=createSprite(100,100,50,50)
  o3=createSprite(500,100,50,50)
  o2.velocityX=2
  o3.velocityX=-2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounce (o2,o3)
 collision(o1,movingRect)
 if(collision (o1,movingRect)){
   o1.shapeColor="red"
   movingRect.shapeColor="red"
 }
 else {
  o1.shapeColor="green"
  movingRect.shapeColor="green"
 }
  drawSprites();
}