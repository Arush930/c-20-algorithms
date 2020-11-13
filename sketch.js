var rect,movingrect


function setup() {
  createCanvas(800,400);
  rect = createSprite (100,200,50,50)
  movingrect = createSprite (300,200,50,50)
  rect.shapeColor = "red"
  movingrect.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
 
 movingrect.x = mouseX
 movingrect.y = mouseY
 
if (movingrect.x-rect.x < movingrect.width/2 + rect.width/2 && 
rect.x-movingrect.x < movingrect.width/2 + rect.width/2 &&
rect.y-movingrect.y < movingrect.height/2 + rect.height/2 && 
movingrect.y-rect.y < movingrect.height/2 + rect.height/2) {
rect.shapeColor = "green"
movingrect.shapeColor = "green"
}
else {
rect.shapeColor = "red"
  movingrect.shapeColor = "red"
}
  drawSprites();
}