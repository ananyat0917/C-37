var database, gameState, playerCount, form, game, player, allPlayers;

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  gameState = 0;
  game = new Game();
  game.getGameState();
  game.start();
}

function draw(){
  background("white");  
}