const express=require('express')
const route=express.Router()

route.get('/',(req, res)=>{
    console.log("hi im from checkout page");
    res.render('checkout')
})

module.exports=route