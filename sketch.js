var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(800,400);
  
  fixedRectangle= createSprite(200,200,50,50);
  fixedRectangle.shapeColor="green";
  movingRectangle= createSprite(200,100,10,10);
fixedRectangle.debug=true;
movingRectangle.debug=true;

movingRectangle.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRectangle.x= World.mouseX;
  movingRectangle.y=World.mouseY;
  console.log(movingRectangle.x);
  console.log(movingRectangle.y);
  console.log(fixedRectangle.x);
  console.log(fixedRectangle.y);

  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    && fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2 && 
    movingRectangle.y-fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2 && fixedRectangle.y-
    movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2){
    movingRectangle.shapeColor="red";
    fixedRectangle.shapeColor="red";
  }else{
    movingRectangle.shapeColor="green";
    fixedRectangle.shapeColor="green";
  }
  drawSprites();
  
}