const express=require('express')
const route=express.Router()
const path=require('path')



route.get('/', (req, res)=>{
    res.render('home')
})


module.exports=route