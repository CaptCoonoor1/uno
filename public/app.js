var socket;

function setup() {
   socket = io.connect('http://localhost:3000/');
   console.log("hello" + socket.id);
}
