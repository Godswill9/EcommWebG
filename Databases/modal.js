const express=require('express')
const Mongoose=require('mongoose')
// const userSchema=require('./schema')

const UserModal=Mongoose.model('auth', userSchema)
// async function run(){
//     const findUser=await new UserModal.find()
// }

// run()


// module.exports=UserModal