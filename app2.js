var express = require('express')
var app = express()
app.use(express.static('/public'))
app.set('view engine', 'ejs')
app.set('views', './views')

var PORT = 1234

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var fs = require('fs')

io.sockets.on('connection', (socket) => {
    console.log('Co nguoi ket noi!')

    io.sockets.emit("SERVER_SEND_DATA", "ajfldjflsjfadljfklasdjfoak")


})

app.get("/user/:id", (req, res) => {
    res.end(req.params.id)
})

app.get("/", (req, res) => {
    res.render("bieudo");
});

server.listen(process.env.PORT || PORT)

//------------------------CLIENT-------------------------
var HOST = 'localhost'
var net = require('net');
var client = new net.Socket();
client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('I am here!');
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('SERVER_SEND_DATA', function(data) {

    console.log('DATA: ' + data);
    client.write('DATA')

});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});