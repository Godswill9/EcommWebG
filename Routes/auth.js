const express=require('express')
const route=express.Router()
const bcrypt=require('bcrypt')
const UserCollection=require('../Databases/schema')


route.get('/', (req, res)=>{
    res.render('auth')
    // res.send('hi')
    console.log('hi...im from authentication')
})
route.post('/', async(req, res)=>{
    try{
        const{firstname, surname, phone,email, password}= req.body;
        //    const salt= bcrypt.genSalt()
        //     salt.
        //     const hashedPassword=
        
        const userDb= await UserCollection.findOne({ $or:[{firstname}, {email}]})
        if(userDb){
            res.status(400).send({msg:'User already exists'})
        }
        else{
            const newUser=await UserCollection.create({firstname, surname, phone,email, password})
          newUser.save()
          console.log(newUser)
          res.redirect('login')
        }
    }catch(err){
    console.log(err)
    }
   


})

module.exports=route