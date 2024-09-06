const express = require('express')
const app = express()
const PORT = 8080

const index = require('./controllers/indexController.js')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/', index)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))