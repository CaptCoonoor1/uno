var socket;
var joinButton;
var buttons =  new Array(6);
function setup() {
  //p5.js canvas
  createCanvas(600, 600);
  background(0);

  for(x = 0; x < 4 ; x++){
    //4 players
    for (var i = 0; i < buttons.length; i++) {
     buttons[i] = createButton('pos' + i);
     buttons[i].position(i*100  , x * 100);
   }
}



}
function draw() {
  //p5 function

}

function joinButtonPressed() {
  console.log(socket.id);
  createP('Hello you are: ' + socket.id);
  socket.emit('hello');
}
