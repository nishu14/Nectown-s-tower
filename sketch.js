
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob_object_1,bob_object_2,bob_object_3,bob_object_4,bob_object_5;
var roof;
var slingshot_1,slingshot_2,slingshot_3,slingshot_4,slingshot_5;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
	//Create the Bodies Here.
  roof=new Roof(380,300,200,20);
  
  bob_object_1= new Bob(300,500,20);
  slingshot_1=new SlingShot(bob_object_1.body,roof.body,-80,0);

  bob_object_2= new Bob(340,500,20);
  slingshot_2=new SlingShot(bob_object_2.body,roof.body,-40,0);

  bob_object_3= new Bob(380,500,20);
  slingshot_3=new SlingShot(bob_object_3.body,roof.body,0,0);

  bob_object_4= new Bob(420,500,20);
  slingshot_4=new SlingShot(bob_object_4.body,roof.body,40,0);

  bob_object_5= new Bob(460,500,20);
  slingshot_5=new SlingShot(bob_object_5.body,roof.body,80,0);
  
  

	Engine.run(engine);
  
}


function draw() {
  background(245);
  //Engine.update(engine);
  
  slingshot_1.display();
  bob_object_1.display();
  slingshot_2.display();
  bob_object_2.display();
  slingshot_3.display();
  bob_object_3.display();
  slingshot_4.display();
  bob_object_4.display();
  slingshot_5.display();
  bob_object_5.display();
  roof.display();


  
}

function keyPressed() {
	if (keyCode == UP_ARROW) {	
 
	Matter.Body.applyForce(bob_object_1.body,bob_object_1.position,{x:-50,y:-45});
	}
	
	}

  