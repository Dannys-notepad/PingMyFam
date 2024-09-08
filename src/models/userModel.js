const twilio = require('twilio');

const write = require('../utils/writeData.js')
const catchError = require('../utils/catchError.js')
const checkName = require('../utils/checkName.js')
let db = require('../DB/DB.json')

const membersArray = () => {
  let temp
  let array = []
  db.forEach((m) => {
    temp = {
      name: m.name,
      cellmumber: m.cellnumber
    }
    array.push(temp)
  })
  return array
}

const memberName = (Ip) => {
  let temp = db.filter(m => m.credentials.ip === Ip)
  let username = temp[0].name
  return username
}

class member{
  constructor(){
    this.data = ''
    this.dbSchema = ''
  }
  add(data, res){
    try {
      this.data = checkName(data.name)
      if(!this.data){
        this.dbSchema = { ...data }
        db.push(this.dbSchema)
        write('./src/DB/DB.json', db)
        res.status(201).json({msg: 'Account created'})
      }else{
        catchError('Account already exists', 401, res)
      }
    } catch (e) {
      catchError('Internal Server Error', 500, res)
      console.log(e)
    }
  }
  
  dashboard(data, res){
    this.response = {
      username: memberName(data),
      AllFamilyMembers: membersArray()
    }
    res.send(JSON.stringify(this.response))
  }
  
  ping(){
    const accountSid = 'your_account_sid'
    const authToken = 'your_auth_token'
    const client = new twilio(accountSid, authToken)

    client.messages
    .create({
      from: 'your_twilio_number',
      to: 'recipient_number',
      body: 'Hello from Node.js!',
  })
    .then((message) => console.log(message.sid))
    .done()

  }
  
}

module.exports = {
  member
}