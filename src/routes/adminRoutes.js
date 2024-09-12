const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const { adminHomePage, renderAdminLogin, adminLogin } = require('../controllers/adminController.js')

router.get('/', adminHomePage)
router.get('/login', renderAdminLogin)
router.post('/login', adminLogin)
//router.get('/addmember', addNewMember)

module.exports = router