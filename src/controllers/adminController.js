const { admin } = require('../models/adminModel.js')
const generate = require('../utils/generate.js')

const adminHomePage = async (req, res) => {
  if(req.session.admin === undefined){
    res.redirect('/admin/login')
  }
  res.render('admin', {key: generate.ID()})
}

const renderAdminLogin = async (req, res) => {
  res.render('login')
}

const adminLogin = async (req, res) => {
  let data = await {
    email: req.body.email,
    password: req.body.password
  }
  let Admin = new admin
  let login = await Admin.login(data, res, req)
}

module.exports = {
  adminHomePage,
  renderAdminLogin,
  adminLogin
}