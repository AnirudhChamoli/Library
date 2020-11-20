function isTouching(obj1, obj2){
    if(obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 && 
      obj2.x - obj1.x <= obj2.width/2 + obj1.width/2 && 
      obj1.y - obj2.y <= obj1.height/2 + obj2.height/2 &&
      obj2.y - obj1.y <= obj1.height/2 + obj2.height/2){
     
        return true;
   }
   else{
    return false;
   }
  
  }
  function bounceOff(Ar1,Ar2){
    if (Ar1.x - Ar2.x <= Ar1.width/2 + Ar2.width/2 && 
      Ar2.x - Ar1.x <= Ar2.width/2 + Ar1.width/2){
        Ar2.velocityX = -Ar2.velocityX;
          Ar1.velocityX = -Ar1.velocityX;
      }
    
  
    if (Ar1.y - Ar2.y <= Ar1.height/2 + Ar2.height/2 &&
      Ar2.y - Ar1.y <= Ar1.height/2 + Ar2.height/2){
        Ar2.velocityY = -Ar2.velocityY;
          Ar1.velocityY = -Ar1.velocityY;
      }
  
  }

  function createsprite(w,h,x,y){
      rectMode(CENTER);
      rect(x,y,w,h);
  }

  