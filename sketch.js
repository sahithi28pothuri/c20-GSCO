var car, wall;
var speed, weight;
var deformation=0;

function setup() {
  createCanvas(1600,400);

  car  = createSprite(50, 200, 50, 50);
  car.shapeColor = color(24,23,20)


  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color(124,123,20)

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
}

function draw() {
  background(120,148,118);  
 
  car.velocityX = speed;

  if(wall.x-car.x< wall.width/2 + car.width/2){
    car.velocityX = 0;
    deformation = (0.5*speed*speed*weight)/22510;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
      textSize(25);
      fill("red");
      text ("SafeFactor:"+"Highly risky",550,50);
    }

    else if(deformation<180 && deformation>100){
      car.shapeColor = color(0,255,0);
      textSize(25);
      fill("brown");
      text ("SafeFactor:"+"slightly risky",550,50);
    }

    else if(deformation<100){
      car.shapeColor = color(0,0,255);
      textSize(25);
      fill("green");
      text ("SafeFactor:"+"Safe",550,50);
    }
  }

  textSize(25);
  fill("blue")
  text ("Deformation:"+round(deformation),250,50);
 

  drawSprites();
}