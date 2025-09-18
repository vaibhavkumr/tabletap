const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });
app.use(cors());
app.use(express.json());
server.listen(5000, () => console.log('Server on port 5000'));