const express = require('express')
const router = express.Router()
const { register, renderDashboard } = require('../controllers/apiController.js')
const loginWare = require('../middlewares/loginWare.js')

router.get('/register', register)
router.get('/dashboard', loginWare, renderDashboard)

module.exports = router