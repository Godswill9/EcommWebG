const express=require('express')
const route=express.Router()
var obj= require('../public/css/javascript/user')
// var arr=require('../public/css/javascript/home')


route.get('/', (req, res)=>{
res.render('user',{cart:obj})
    
})

module.exports=route