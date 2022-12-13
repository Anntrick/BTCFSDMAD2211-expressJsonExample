const taskData = require('../taskData.json')
module.exports = (req, res, next) => {
    let ids = taskData.map(task => task.id)
    let task = ids.indexOf(parseInt(req.params.id))
    if(task != -1){
        console.log("Vamos bien")
    } else {
        console.log("el id no es correcto")
    }
    next()
}