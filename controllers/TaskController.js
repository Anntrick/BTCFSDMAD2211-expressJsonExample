const taskData = require('../taskData.json')
const fs = require('fs')

const taskController = {}

//READ
taskController.getAll = (req, res) => {
    try{
        //res.send(taskData.map(task => `la tarea ${task.id} se llama ${task.name}...`))
        res.json(taskData)
    } catch(err){
        console.log(err.bgRed)
        res.send("Ha habido un error")
    }
}

taskController.getById = (req, res) => {
    try{
        let id = req.params.id
        res.send(taskData.find(task => task.id === id))
    } catch(err){
        console.log(err.bgRed)
        res.send("Ha habido un error")
    }
}

//CREATE
taskController.newTask = (req, res) => {
    try {
        let ids = taskData.map(task => task.id)
        let maxid = Math.max(...ids) + 1

        taskData.push({
            id: maxid,
            name: req.body.name,
            description: req.body.description,
            date: new Date().toLocaleString("es-ES", {timeZone: "Europe/Madrid"})
        })

        fs.writeFile("./taskData.json",
            JSON.stringify(taskData, null, "\t"),
            (error) => {
                if(error){
                    console.log(error.bgRed)
                }
            }
        )
        res.send("Se ha creado la nueva tarea")
    } catch(err) {
        console.log(err.bgRed)
        res.send("Ha habido un error")
    }
}

//UPDATE
taskController.modTask = (req, res) => {
    try{
        let id = req.params.id
        let data = req.body
        let ids = taskData.map(task => task.id)
        let task = ids.indexOf(parseInt(id))

        taskData[task].name = data.name
        taskData[task].description = data.description
        taskData[task].date = new Date().toLocaleString("es-ES", {timeZone: "Europe/Madrid"})

        fs.writeFile("./taskData.json",
            JSON.stringify(taskData, null, "\t"),
            (error) => {
                if(error){
                    console.log(error.bgRed)
                }
            }
        )

        if(task == -1){
            throw "No se ha encontrado la tarea"
        }else {
            res.send("Tarea editada")
        }
        

    } catch(err){
        console.log(err.bgRed)
        res.send("Ha habido un error")
    }
}


//DELETE
taskController.delTask = (req, res) => {
    try {
        let id = req.params.id
        let ids = taskData.map(task => task.id)
        let task = ids.indexOf(parseInt(id))

        if(task != -1){
            taskData.splice(task, 1)
            fs.writeFile("./taskData.json",
                JSON.stringify(taskData, null, "\t"),
                (error) => {
                    if(error){
                        console.log(error.bgRed)
                    }
                }
            )
            res.send("Tarea eliminada")
        } else {
            throw "No se ha encontrado la tarea"
        }

    } catch(err){
        console.log(err.bgRed)
        res.send("Ha habido un error")
    }
}


module.exports = taskController