const express=require('express')
const passport = require('passport')
const route=express.Router()
const UserCollection=require('../Databases/schema')
const crypto=require('crypto')
const { forwardAuthenticated}= require('../config/authenticate-config')


route.get('/', forwardAuthenticated, (req, res)=>{
    console.log("this is the login route")
    res.render('login')
})

route.post('/', (req, res, next)=>{
    passport.authenticate('local', {
        successRedirect:"/home",
        failureRedirect:"/login",
        // failureFlash:true
    })(req, res, next)
})


module.exports=route