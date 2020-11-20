var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(200, 200, 50, 50);
  fixedRect = createSprite(400,400, 70,60);

  gameObject1 = createSprite(100,100,60,60);
  gameObject2 = createSprite(300,100,60,60);
  gameObject3 = createSprite(500,100,60,60);
  gameObject4 = createSprite(700,100,60,60);

  gameObject1.velocityX = 5;
  gameObject4.velocityX = -5;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  gameObject1.shapeColor= "blue";
  gameObject2.shapeColor= "blue";
  gameObject3.shapeColor= "blue";
  gameObject4.shapeColor= "blue";


  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0); 
  
 // gameObject1.x = mouseX;
 // gameObject1.y = mouseY;


  console.log(fixedRect.width/2 + movingRect.width/2);
  console.log(fixedRect.x - movingRect.x);

 if( isTouching(movingRect, gameObject3)){
   gameObject3.x = gameObject3.x + 100;
   gameObject3.y = gameObject3.y + 200;

 }
 else{
  gameObject3.x =500;
  gameObject3.y = 100;

 }

 if(isTouching(gameObject1, gameObject4)){
   gameObject1.shapeColor = "yellow";
   gameObject4.shapeColor = "purple";

 }

bounceOff(gameObject1,gameObject4);
 createsprite(200,200,400,400);
  drawSprites();
}



