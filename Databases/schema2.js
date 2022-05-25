const express=require('express')
const Mongoose=require('mongoose')

const first=new Mongoose.Schema({
    img:{
        type:String,
    },
    name:{
        type:String,
        
    },
    price:{
        type:String,
        
    },
    quantity:{
        type:String,
        
    },
     
})

const cartSchema= new Mongoose.Schema({
   cartDetails:[first]
})

module.exports=Mongoose.model('cart',cartSchema)