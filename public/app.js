var socket;
var joinButton;
var startGameButton;
var buttons = new Array(6);
var canvasWidth = 600;
var canvasHeight = 800;

function setup() {
  //p5.js canvas
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  createButtons();
  startGameButton = createButton('Start Game');
  startGameButton.position(canvasWidth / 2, canvasHeight - 100);
  console.log(canvasWidth + " x " + canvasHeight);

}

function draw() {
  //p5 function

}

function testFunction() {
  console.log("button pressed" + buttonName);
}


function createButtons() {
  for (x = 0; x < 4; x++) {
    //4 players
    for (var i = 0; i < buttons.length; i++) {
      buttons[i] = createButton('pos' + i);
      buttons[i].position(i * 100 + 50, x * 100 + 50);
      buttons[i].mousePressed(testFunction);
    }
  }
}

function joinButtonPressed() {
  console.log(socket.id);
  createP('Hello you are: ' + socket.id);
  socket.emit('hello');
}
