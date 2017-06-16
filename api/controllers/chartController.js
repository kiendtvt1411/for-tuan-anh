var Charts = require('../models/chartModel')

module.exports = (app) => {
    
    app.get('/api/chart', (req, res)=>{

        // setup some value of chart
        var seedChart = [
            {
                gas: 1000,
                temp : 30
            },
            {
                gas: 300,
                temp: 39
            },
            {
                gas: 700,
                temp: 35
            }
        ]

        Charts.create(seedChart, (err, results)=>{

            res.render('bieudo.ejs')   
        })
    })
}