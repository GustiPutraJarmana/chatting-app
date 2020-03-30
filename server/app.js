const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router/index')
const port = process.env.PORT || 3000
require('dotenv').config()
const errorHandling = require('./middleware/errorhandling')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('send message', (message) => {
        console.log(message);
        socket.broadcast.emit('send back', message);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended : true}))
    .use('/', router)
    .use(errorHandling)

    http.listen(port, () => {console.log('listerning to port ', port)})