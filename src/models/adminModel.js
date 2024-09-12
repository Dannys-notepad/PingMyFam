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
}

module.exports = {
  admin
}