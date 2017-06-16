var ioc = require('socket.io-client')('http://localhost:3000')
ioc.on('connect', () => {
    ioc.on('SERVER_SEND_DATA', (data) => {
        console.log(data + ' test thôi ')
        $('currentUser').html(data)
    })
})

module.exports = ioc
