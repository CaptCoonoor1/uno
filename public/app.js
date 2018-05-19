var socket;
var joinButton;

function setup() {
  //p5.js canvas
  createCanvas(100, 100);
  background(0);

  joinButton = createButton('Join!');
  joinButton.position(19, 19);
  joinButton.mousePressed(joinButtonPressed);
  socket = io.connect('http://localhost:3000/');


}
function draw() {
  //p5 function

}

function joinButtonPressed() {
  console.log(socket.id);
  createP('Hello you are: ' + socket.id);
  socket.emit('hello');
}
