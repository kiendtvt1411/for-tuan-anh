var Charts = require('../models/chartModel')

module.exports = (app, socket) => {

    socket.on('data', (data) => {
        console.log('vao day OK')
        if(data!=null){
            data = JSON.parse(data)
            var temp = data.temp
            console.log(temp)
            $("$currentUser").html(temp)
        }
    })
}