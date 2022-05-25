const express=require('express')
const route=express.Router()
const bcrypt=require('bcrypt')
const UserCollection=require('../Databases/schema')
const passport = require('passport')
// const {hashPassword, comparePassword}= require('./helpers')
const { forwardAuthenticated}= require('../config/authenticate-config')


route.get('/',forwardAuthenticated, async(req, res)=>{
    res.render('auth')
    // res.send('hi')
    console.log('hi...im from authentication')
})

route.post('/', (req, res)=>{
     const {firstname, surname, phone, email, password}= req.body
     let errors=[]
      if(!firstname || !surname || !phone || !email || !password ){
          console.log("pls input all fields")
          errors.push({msg:"pls input all fields"})
      }
      if(password.length < 7){
          console.log("password must be at least 7 characters")
          errors.push({msg:"password must be at least 7 characters"})
      }
      if(errors.lenght > 0){
          res.render('auth', {
              errors, firstname, email
          })
}else{
    UserCollection.findOne({email})
    .then(user=>{
    if(user){
        errors.push({msg:"user already exists"})
        res.render("auth", {
        errors, firstname, email
        })
    }else{
        const newUser= UserCollection.create({firstname, surname, phone, email, password})
        
        .then(user=>{
            let pass=user.password
            var salt= bcrypt.genSalt(10, function(err, salt){
                bcrypt.hash(pass, salt, (err, hash)=>{
                    if(err) throw err
                   user.password= hash;
                   user.save()
            })
           
            
              })})
              console.log("you are now registered, proceed to login")
        res.redirect('/login')
        
        //     //   .catch(err=>{
        //     //     console.log(err)
        //     //   })
        //   })
        }
    })
  }
})


module.exports=route