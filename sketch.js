function setup()
{
  createCanvas(400, 400);
  
  var box = createSprite(200,200,20,20);
  box.shapecolor = 'green';
}
function draw() 
{ 
  //background('orange');
  text("Press Arrow keys to change color",100,150);
  if(keyIsDown(LEFT_ARROW))
  {
   background('red');
  }
  if(keyIsDown(RIGHT_ARROW))
  {
   background('yellow');
  }
  if(keyIsDown(UP_ARROW))
  {
    background('blue');
  }
  if(keyIsDown(DOWN_ARROW))
  {
    background('green');
  }
  drawSprites();
  
}
