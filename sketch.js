const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
    world = engine.world;

    box2 = new Box(920,320,50,50);
    box1 = new Box(700,320,50,50);
    box3 = new Box(700,250,50,50);
    box4 = new Box(920,250,50,50);
    box5 = new Box(700,180,50,50);
    box6 = new Box(920,180,50,50);

    log1=new log(810,280,20,300,PI/2); 
    log2=new log(810,215,20,300,PI/2); 
    log3=new log(810,150,20,300,PI/2);

    ground1 = new Ground(200,350,1500,20)

}

function draw() {
  background(255,255,255);

  Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    log1.display();
    log2.display();
    log3.display();
    
    ground1.display();

    //triangle1.display(triangle1);
}