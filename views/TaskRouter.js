const express = require('express')
const router = express.Router()
const helloMid = require('../middlewares/helloMid')
const { getAll, getById, newTask, modTask, delTask } = require('../controllers/TaskController')

router.get('/getAll', getAll)
router.get('/getById/:id',helloMid, getById)
router.post('/newTask', newTask)
router.put('/editTask/:id',helloMid, modTask)
router.delete('/deleteTask/:id',helloMid, delTask)




module.exports = router