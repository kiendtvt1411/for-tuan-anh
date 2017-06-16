var mongoose = require('mongoose')

var Schema = mongoose.Schema

var chartSchema = new Schema({
    gas : String,
    temp : String
})

var Charts = mongoose.model('Charts', chartSchema)

module.exports = Charts