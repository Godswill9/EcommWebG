const express=require('express')
const route=express.Router()
const path=require('path')
const {ensureAuthentication} = require('../config/authenticate-config')

route.get('/',(req, res)=>{
  req.logOut()
   res.redirect('/login')
})



module.exports=route