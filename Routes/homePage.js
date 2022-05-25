const express=require('express')
const route=express.Router()
const path=require('path')
const {ensureAuthentication} = require('../config/authenticate-config')


route.get('/',ensureAuthentication,(req, res)=>{
    res.render('home')
   email=req.user.email
   
    // res.send(req.body)
    console.log("hello home")
    console.log(email)
})

route.post('/', (req, res)=>{
    res.send('done')
    console.log(req.body)
    
})



module.exports=route
