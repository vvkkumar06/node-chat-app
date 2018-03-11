const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


app.use(express.static(publicPath));


const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket)=>{
    console.log("New user connected");
    socket.on('connect', ()=>{
        console.log('New user connected')
    });
    socket.on('disconnect', ()=>{
        console.log("User Disconnected");
    });
});

server.listen(port, err=>{
    if(err) throw err;
    console.log("Server running on localhost:"+port);
});

