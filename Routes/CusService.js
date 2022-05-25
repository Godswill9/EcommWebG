const express=require('express')
const route=express.Router()
const UserCollection=require('../Databases/schema')
const { forwardAuthenticated}= require('../config/authenticate-config')


//'this customents route will handle all the customers requedsts
//like the carts and others
//even posting customers details to the database

route.get('/', forwardAuthenticated,(req, res)=>{
    res.render('CusService')
})



module.exports=route