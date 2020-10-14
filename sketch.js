var fixedRect, movingRect;
var go1, go2, go3, go4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "pink";
  movingRect.debug = true;

  go1 = createSprite(100, 100, 50, 50);
  go1.shapeColor = "green";
  go2 = createSprite(200, 100, 50, 50);
  go2.shapeColor = "green";
  go3 = createSprite(300, 100, 50, 50);
  go3.shapeColor = "green";
  go4 = createSprite(400, 100, 50, 50);
  go4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, go2))
  {
    movingRect.shapeColor = "blue";
    go4.shapeColor = "blue";

  }
  else {
    movingRect.shapeColor = "pink";
    go4.shapeColor = "pink";
  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}


