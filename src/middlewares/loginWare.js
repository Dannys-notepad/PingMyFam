const catchError = require('../utils/catchError.js')

let db = require('../DB/DB.json')

const loginWare = (req, res, next) => {
  let apkey = db.filter(m => m.credentials.key === req.query.key)
  if(req.query.key === undefined){
    catchError(`Your key is needed to continue`, 401, res)
  }else if(apkey.length === 1){
    next()
  }else {
    catchError('No member with such key, check and try again', 401, res)
  }
}

module.exports = loginWare