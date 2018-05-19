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
io.sockets.on('disconnect', userDisconnect);


function newConnection(socket) {
    console.log('new connection ' + socket.id);
    socket.on('disconnect', userDisconnect);
    //add connected player to the list
    //idea is to let one user at the time draw, hopefully
    playerList.push(socket.id);


    //if there  is a message called example, trigger function "example"
    //socket.on('example', example);
}


function userDisconnect(socket) {
    //on disconnect remove user from the array
    console.log("User disconnected " + socket.id);
    for (var i = 0; i < playerList.length; i++) {
        if (playerList[i] === socket.id) {
            playerList.splice(i, 1);
        }

    }


}
