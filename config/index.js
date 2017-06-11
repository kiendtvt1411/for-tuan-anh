var configValues = require('./config.json')

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${configValues.username}:${configValues.password}@ds111622.mlab.com:11622/dbtodos`
    }
}