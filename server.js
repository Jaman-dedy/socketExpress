const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// set static folder

app.use(express.static(path.join(__dirname, 'public')));

// RUn when a client connects

io.on('connection', (socket) => {
  console.log('new WS connection');
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
