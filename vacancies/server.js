const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

server.listen( 4000,'127.0.0.1' );

app.use(express.static(path.join(__dirname, '/client_side/public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client_side/public/index.html');
});



