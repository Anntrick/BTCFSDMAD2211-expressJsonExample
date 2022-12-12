const express = require('express')
const router = express.Router()

const { getAll, getById, newTask, modTask, delTask } = require('../controllers/TaskController')

router.get('/getAll', getAll)
router.get('/getById/:id', getById)
router.post('/newTask', newTask)
router.put('/editTask/:id', modTask)
router.delete('/deleteTask/:id', delTask)




module.exports = router