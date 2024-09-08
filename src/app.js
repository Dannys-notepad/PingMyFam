const express = require('express')
const app = express()
const PORT = 8080

const PingMyFam = require('./routes/PingMyFam.js')
const index = require('./controllers/indexController.js')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/', index)
app.use('/api/v1/pingmyfam', PingMyFam)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))