/*
 * Require
 */
const express = require('express');
const { join } = require('path');
const { Server } = require('http');
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);


/*
 * Express
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', function(socket) {
  console.log('>> socket.io - connected');
  socket.on('send_message', function(message) {
    message.id = ++id;
    io.emit('send_message', message);
  });
});

/*
 * Server
 */
server.listen(3000, function() {
  console.log('listening on *:3000');
});
