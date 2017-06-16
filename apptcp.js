var mongoose = require('mongoose')
var net = require('net')

var PORT = 5000

var config = require('./config')

mongoose.connect(config.getDbConnectionString())

var Charts = require('./api/models/chartModel')

var server = net.createServer()

server.on('connection', (socket) => {
    console.log('Ket noi')

    socket.on('data', (data) => {
        console.log("Da connect!" + data)

        var gas = data / 100000
        var temp = data % 100000

        var chart = new Charts({
            gas: gas,
            temp: temp
        })

        chart.save((err, chart) => {
            if (err) console.error(err)
            console.dir('ok'+chart)
        })
    })
})

server.listen(process.env.PORT || PORT)