var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,75,75);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="black";   
  speed=random(55,90);
  weight=random(400, 1500);
}

function draw() {
  background(225,225,225);
  if (isTouching(car,wall)) {
    car.shapeColor="green";
    car.velocityX=0;
  }
  car.velocityX=speed;
  console.log(speed);
  //console.log(weight);
  drawSprites();
}