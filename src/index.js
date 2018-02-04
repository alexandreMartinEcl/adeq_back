const express = require('express');
const config = require('./config');

const app = express();
const server = require('http').Server(app);

require('./config/mongoose');
//require('./config/seed');

require('./config/express')(app);
require('./config/routes')(app);

let io = require('socket.io')(server);

const socketServer = require('./config/sockets');
socketServer.init(server);

server.listen(config.app.port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening ${config.app.port}`);
});
