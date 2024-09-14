const firebase = require('firebase/app')
const db = require('../services/firebaseService.js')
const { collection, doc, getDoc, getDocs, setDoc } = require('firebase/firestore')
const catchError = require('../utils/catchError.js')


const view = async () => {
  let member = {}
  let members = []
  const querySnapshot = await getDocs(collection(db, "membersInfo"))
    querySnapshot.forEach((doc) => {
      member = {
        id: doc.id,
        details: doc.data()
      }
      members.push(member)
  })
  return members
}

const add = async (data) => {
  const docRef = doc(db, "membersInfo", data.lastname)
  const docSnap = await getDoc(docRef)
  
  await setDoc(doc(db, "membersInfo", data.lastname), {
    fullname: data.fullname(),
    email: data.email,
    cellnumber: data.cellnumber,
    Key: data.key
  })
}

class  admin{
  constructor(){
    this.email = process.env.ADMIN_EMAIL
    this.password = process.env.ADMIN_KEY
  }
  
  login(data, res, req){
    if(this.email === data.email){
      if(btoa(data.password) === this.password){
        req.session.admin = data.email
        res.redirect('/admin')
      }else{
        res.render('login')
      }
    }else{
      res.render('login')
    }
  }
  
  viewAllMembers(){
    return view()
  }
  
  addMember(data, res){
    try {
      add(data)
    } catch (e) {
      catchError(e.toString(), 500, res)
    }
  }
  
}

module.exports = { admin }