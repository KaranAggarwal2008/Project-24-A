
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
    var boxPosition = 550;
	var boxY=610;
	var boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	var boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	var boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	var boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	var boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

var	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);
	var groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
   //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	  ball = Bodies.circle(40,600,20,{restitution:0.3,isStatic:false,friction:0.5,density:1.2});
	  ball.shapeColor=color("red");
		World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}


