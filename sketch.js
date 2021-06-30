const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var box;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:false
  }
  box=Bodies.circle(200,200,50,options);
  World.add(world,box);
}

function draw() {
  background("black");
  Engine.update(engine);
  ellipseMode(CENTER);
  ellipse(box.position.x,box.position.y,50,50);
}