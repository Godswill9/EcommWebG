const express=require('express')
const Mongoose=require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')

const userSchema= new Mongoose.Schema({
    firstname:{
        type:Mongoose.SchemaTypes.String,
        required:true
    },
    surname:{
        type:Mongoose.SchemaTypes.String,
        required:true
    },
    phone:{
        type:Mongoose.SchemaTypes.Number,
        required:true
    },
    email:{
       type: Mongoose.SchemaTypes.String,
       required:true
     },
     password:{
         type:Mongoose.SchemaTypes.String,
         required:true
     }
})


module.exports=Mongoose.model('auth', userSchema)