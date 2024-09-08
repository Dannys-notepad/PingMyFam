const { member } = require('../models/userModel.js')
const catchError = require('../utils/catchError.js')

const add = async (data, res) => {
  try {
    let Member = new member
    let mem = await Member.add(data, res)
  } catch (e) {
    catchError('Internal Server Error', 500, res)
    console.log(e)
  }
}

const dashboard = async (data, res) => {
  try {
    let Member = new member
    let mem = await Member.dashboard(data, res)
  } catch (e) {
    catchError('Internal Server Error', 500, res)
    console.log(e)
  }
}

module.exports = {
  add,
  dashboard
}