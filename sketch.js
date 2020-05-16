var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  if(ball.bounceOff(paddle)){
     explosion();
  }
  if(ball.x>400){
    ball.x=100
    ball.y=200
    ball.velocityY=0
    ball.velocityX=0
  }
  if(keyDown(SHIFT)){
    explosion() ;
    ball.velocityX=9
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

