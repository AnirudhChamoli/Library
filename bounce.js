var movingRect, fixedRect;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 100, 50, 50);
  fixedRect = createSprite(400,700, 70,60);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.velocityY = 5;
  fixedRect.velocityY = -5;
 
}

function draw() {
  background(0); 
  


  console.log(fixedRect.width/2 + movingRect.width/2);
  console.log(fixedRect.x - movingRect.x);

  /*if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
     movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
     fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
     movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }*/

   if (fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2){
        movingRect.velocityX = -movingRect.velocityX;
        fixedRect.velocityX = -fixedRect.velocityX;
    }
  

  if (fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
        movingRect.velocityY = -movingRect.velocityY;
        fixedRect.velocityY = -fixedRect.velocityY;
    }

  if (fixedRect.y > 790 || fixedRect.y < 50){
    fixedRect.velocityY = -fixedRect.velocityY;    
  }

  if (movingRect.y > 780 || movingRect.y < 50){
      movingRect.velocityY = -movingRect.velocityY;
  }

  drawSprites();
}