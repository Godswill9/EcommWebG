const express=require('express')
const route=express.Router()
const bodyParser=require('body-parser')
const Data=require('../Databases/schema2')
const {ensureAuthentication} = require('../config/authenticate-config')
var fromHome=require('./homepage')

var cartDet=[]
var newCartItems
var totalPrice=[]
var totalQuantity=[]


route.post('/',async(req, res)=>{
    try{
       function run(){
      cartDet=req.body
      totalPrice=[]
      totalQuantity=[]
    //   cartDet.forEach(stuff=> 
    //     totalPrice.push(stuff.price),
    //     totalQuantity.push(stuff.quantity)
    //   )
for(var i=0; i<cartDet.length; i++){
   var img=cartDet[i].img
    var name= cartDet[i].name
    var price=cartDet[i].price
    var quantity=cartDet[i].quantity
   
     var mongoObj={
         img:img,
        name: name,
        price: price,
        quantity: quantity

    }
    newCartItems=new Data({
        cartDetails:mongoObj
    })
      newCartItems.save()

      totalPrice.push(price),
 totalQuantity.push(quantity)
    
}
       }
      run()

}catch(err){   
        console.log(err)
    }
    
})

route.get('/',ensureAuthentication, async (req, res)=>{
    if(!cartDet) {
    res.render('user')
}else{
    // var items= await Data.find().limit(cartDet.length)
    var items= await cartDet
    console.log(cartDet)
    var totalP=[]
    var totalQ=[]
    var counterP=0
    var counterQ=0
    var summ=0
totalPrice.forEach(stuff=>{
   var numStr= stuff.slice(1)
   var num=Number(numStr)
   totalP.push(num)
})
totalQuantity.forEach(stuff=>{
    var num=Number(stuff)
    console.log(num)
    totalQ.push(num)
 })




 for(var i=0; i <totalP.length;i++ ){
     counterP=counterP + totalP[i]
 }
 for(var i=0; i<totalQ.length; i++){
     counterQ= counterQ + totalQ[i]
 }    
 
console.log(counterP, counterQ)
summ=counterP * counterQ
   
    if(!items){res.render('user')}else{
        res.render('user',{
            items:items,
            counterP:summ,
            counterQ:counterQ

        })
    }

}
    
})

module.exports=route