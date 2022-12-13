const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const morgan = require('morgan')
const logger = require('winston')

const router = require('./router')

const HelloMid = require('./middlewares/helloMid')

const PORT = 3000
const app = express()

//Para usar json en los endpoints
app.use(express.json())
//LLamamos a morgan y winston
app.use(morgan('combined', { "stream": logger.stream.write }))
//app.use(HelloMid)
//Aquí nos vienen todas las rutas
app.use(router)

app.get('/', (req, res) => {
    res.send("Hola mundo!!!!!")
})




app.listen(PORT, () => console.log(`Corriendo en el puerto ${PORT}`.bgGreen.black))