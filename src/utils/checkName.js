let db = require('../DB/DB.json')

const checkName = (data) => {
  let name = db.filter(m => m.name === data)
  if(name.length !== 0){
    return true
  }else{
    return false
  }
}

module.exports = checkName