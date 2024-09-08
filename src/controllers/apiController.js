const Member = require('../services/apiService.js')

const catchError = require('../utils/catchError.js')
const generate = require('../utils/generate.js')

const register = async (req, res) => {
  try {
    if((req.query.name !== undefined && req.query.name.length < 30) && (req.query.cell !== undefined || req.query.cell !== null)){
      let data = {
        id: generate.ID(),
        name: req.query.name.replace('-', ' '),
        cellnumber: req.query.cell,
        credentials: {
          key: generate.Key(),
          ip: req.ip
        }
      }
      let add = await Member.add(data, res)
    }
  } catch (e) {
    catchError('Internal Server Error', 500, res)
    console.log(e)
  }
}

const renderDashboard = async (req, res) => {
  try {
    let data = await req.ip
    let add = await Member.dashboard(data, res)
  } catch (e) {
    catchError('Internal Server Error', 500, res)
    console.log(e)
  }
}

module.exports = {
  register,
  renderDashboard
}