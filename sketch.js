
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dust;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dust = new Dustbin(600,625,0,0);
	World.add(world, box);

	paper = new Paper(2,2,1,2);
	World.add(world, paper) 


	ground = new Ground(10,10,10,10);
	World.add(world, ground) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dust.display();
  paper.display();
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});

	}
}

