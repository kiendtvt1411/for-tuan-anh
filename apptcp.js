var mongoose = require('mongoose')
var net = require('net')

var PORT = 5000

var config = require('./config')

mongoose.connect(config.getDbConnectionString())

var Charts = require('./api/models/chartModel')

var server = net.createServer()

server.on('connection', (socket) => {
    console.log('DAY LA TAO')

    var seedChart = [{
            gas: 10000,
            temp: 300
        },
        {
            gas: 10000,
            temp: 39
        },
        {
            gas: 10000,
            temp: 55
        }
    ]

    Charts.create(seedChart, (err, results) => {

        // res.render('bieudo.ejs')
    })

    socket.on('data', (data) => {
        console.log(data.toString())
    })
})

server.listen(process.env.PORT || PORT)