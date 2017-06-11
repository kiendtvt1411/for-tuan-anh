var Todos = require('../models/todoModel')

module.exports = (app)=>{

    app.get('/api/setupTodos', (req, res)=>{

        // setup seeds data
        var seedTodo = [
            {
                text : 'Hoc Node.js',
                isDone : false,
            },
            {
                text : 'Hoc Angular.js',
                isDone : false,
            },
            {
                text : 'Viet mot ung dung hoan chinh',
                isDone : false,
            },
        ]

        Todos.create(seedTodo, (err, results)=>{

            res.send(results)
        })
    })

}