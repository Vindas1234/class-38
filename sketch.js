var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var trackIMG,car1Img,car2IMG,car3Img, car4Img,groundIMG;
var cars, car1, car2, car3, car4;



function preload(){
trackIMG=loadImage("images/road.jpg");
car1IMG=loadImage("images/car1.png");
car2IMG=loadImage("images/car2.png");
car3IMG=loadImage("images/car3.png");
car4IMG=loadImage("images/car4.png");
groundIMG=loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }
}
