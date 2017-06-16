var configValues = require('./config.json')

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.username}:${configValues.password}@ds127982.mlab.com:27982/dbchart`
    }
}