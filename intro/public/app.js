var socket;
function setup() {
  //////////////////////////////////////////////////////////////
  ///////////////////the actually socket connection////////////
  socket = io.connect('http://localhost:3000/');
  console.log("hello" + socket.id);
}
