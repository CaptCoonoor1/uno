var express = require('express');
var app = express();
var port = 3000;
var server = app.listen(port);

//this array will have all the connected playeds id
var playerList = [];
app.use(express.static('public'));
console.log("My socket server is running on http://localhost:/" + port + "/");

var socket = require('socket.io');
var io = socket(server);


//event for new connection
io.sockets.on('connection', newConnection);



function newConnection(socket) {
  playerList.push(socket.id);
  console.log('new connection ' + socket.id + ' playerList = ' + playerList.length);
  io.sockets.emit('getArray', playerList);

  socket.on('disconnect', function() {
    console.log('Got disconnect!' + socket.id);
    for (var i = 0; i < playerList.length; i++) {
      if (playerList[i] === socket.id) {
        playerList.splice(i, 1);
      }
    }
  });
  socket.on('joinGame', clientJoinGamePressed);
  socket.on('buttonPressed', clientButtonPressed);


  //add connected player to the list
  //idea is to let one user at the time draw, hopefully

  //if the game is full start the game
  if (playerList.length >= 4) {


    startGame();
  }


  //if there  is a message called example, trigger function "example"
  //socket.on('example', example);
}

function welcomeNewPlayer(data) {

  console.log(data);
  console.log("welcomeNewPlayer");

}

function clientButtonPressed(data) {
  console.log('hey');
  console.log(data);
  console.log(playerList);
  //playerList[0] can use buttons on x= ? , y=50
  //playerList[1] can use buttons on x= ? , y=150
  //...
  for (var i = 0; i < playerList.length; i++) {
    let yValue = [50, 150, 250, 350];
    let xValue = [50, 150, 250, 350];
    if (data.id == playerList[i] && data.y == yValue[i]) {
      //playerList[0] can use buttons on x= ? , y=50
      console.log(playerList[i]);
      console.log(yValue[i]);
      console.log('this is your card:' + xValue.indexOf(data.x));
    }
  }
}

function clientJoinGamePressed(data) {
  console.log(data);
  io.sockets.emit('clientJoinGamePressed', data);
}

function startGame() {
  console.log('game starting');
  for (var i = 0; i < playerList.length; i++) {
    var hand = {
      playerId: playerList[i],
      card1: Math.floor((Math.random() * 5) + 1),
      card2: Math.floor((Math.random() * 5) + 1),
      card3: Math.floor((Math.random() * 5) + 1),
      card4: Math.floor((Math.random() * 5) + 1)
    };
    //send this to the clients 
    console.log(hand);
  }

}
