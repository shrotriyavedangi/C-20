var mbox,fbox

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 mbox = createSprite(200,200,100,100);
 fbox = createSprite(600,200,25,25);
 fbox.shapeColor="yellow"
 mbox.shapeColor="yellow"
}

function draw() {
  background("blue"); 
  fbox.x=World.mouseX;
  fbox.y=World.mouseY;
  
  if(fbox.x-mbox.x<fbox.width/2+mbox.width/2
    &&mbox.x-fbox.x<fbox.width/2+mbox.width/2
    &&fbox.y-mbox.y<fbox.height/2+mbox.height/2
      &&mbox.y-fbox.y<fbox.height/2+mbox.height/2){
    fbox.shapeColor="green"
 mbox.shapeColor="green" 
  }
  else{ fbox.shapeColor="yellow"
  mbox.shapeColor="yellow"}
  drawSprites();
}