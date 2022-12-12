const express = require('express')
const router = express.Router()

const taskRouter = require('./views/taskRouter')
//Aquí tendremos todas las llamadas a las rutas de views
router.use('/tasks', taskRouter)

module.exports = router