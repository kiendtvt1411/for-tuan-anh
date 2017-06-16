var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var fs = require('fs')
var config = require('./config')
var ejs = require('ejs')

var app = express()
var port = process.env.PORT || 3000

app.use(express.static('/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.set('view engine', 'ejs')

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

mongoose.connect(config.getDbConnectionString())
var Charts = require('./api/models/chartModel.js')

io.sockets.on('connection', (socket) => {

    console.log('Connected!')

    // sau 5s emit 1 lan
    setInterval(() => {
        
        Charts.findOne({}, {}, { sort: { 'created_at': 1 } }, (err, post) => {
            console.log(post)
            var obj = {
                gas: post._doc.gas,
                temp: Math.floor((Math.random() * 45) + 1)
            }
            console.log('data: ' + JSON.stringify(obj))
            var temp = obj.temp
            io.sockets.emit('SERVER_SEND_DATA', temp)
        })
    }, 2000)


})

// var ioc = require('socket.io-client')('http://localhost:3000')
// ioc.on('connect', () => {
//     ioc.on('SERVER_SEND_DATA', (data) => {
//         console.log(data)
//     })
// })

// var ioc2 = require('./public/processor')


app.get('/', (req, res) => {
    res.render('bieudo.ejs')
})

server.listen(process.env.PORT || 3000)