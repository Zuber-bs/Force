const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

// Images
var upImg;
var rightImg;
var pushImg;

// Btns
var btn1;
var btn2;

// function preload() {
//   upImg = loadImage("up.png");
//   pushImg = loadImage("push.png");
//   rightImg = loadImage("right.png");
// }

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg("right.png");
  btn1.position(200, 30);
  btn1.size(50, 50);
  btn1.mouseClicked(rForce);

  btn2 = createImg("up.png");
  btn2.position(100, 50);
  btn2.size(50, 50);
  btn2.mouseClicked(uForce);

  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = new Ball(200, 200, 50);

  console.log(ball.body.position.x, ball.body.position.y);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw()
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ball.show();
  Engine.update(engine);
}

function rForce() {
  Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0.01, y: 0});
}

function uForce() {
  Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0, y: -0.01});
}

