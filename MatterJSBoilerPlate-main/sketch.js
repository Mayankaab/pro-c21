var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
 }
 ball = Matter.Bodies.circle(200,200,10,ball_options)
World.add (world,ball)
	Engine.run(engine);
	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120)
	RightSide = new Ground(800,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
 ellipse(ball.position.x,ball.position.y,20,20)
  groundObj.display()
 leftSide.display()
 RightSide.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})		
	}
}

