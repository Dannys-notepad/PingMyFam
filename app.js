require('dotenv').config()

const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const sendMail = require('./src/services/emailService.js')
const adminRoutes = require('./src/routes/adminRoutes.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static(path.join(__dirname, './public')))
app.use(sessions({
  secret: process.env.SECRET_KEY,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false
  },
  reSave: false
}))

app.get('/', async (req, res) => {
  await sendMail(res)
})

app.use('/admin', adminRoutes)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))