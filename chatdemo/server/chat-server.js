// Server
var io1 = require('socket.io').listen(8000);

io1.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    console.log(msg);
  });
});

// Mirror
var ioIn = require('socket.io').listen(5000);
var ioOut = require('socket.io-client');
var socketOut = ioOut.connect('http://localhost:8000');


ioIn.on('connection', function(socketIn) {   
  socketIn.on('new message', function(msg) {
    socketOut.emit('chat message', msg);
     ioIn.emit('message created', msg);
  });
  
});