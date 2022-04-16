const express=require('express')
const app=express()
const port=3000;
const path=require('path')
const bodyParser=require('body-parser')

//all routes imported
const home=require('./Routes/homePage')
const auth=require('./Routes/auth')
const checkout=require('./Routes/checkout')
const login=require('./Routes/login')
const user=require('./Routes/user')
const collections=require('./Routes/collections')
const CusService=require('./Routes/CusService')
//end of importation of routes

//databases incoming
const mongoose=require('mongoose')
const url= "mongodb://localhost:27017/mydb"
const UserCollection=require('./Databases/schema')


//databases

mongoose.connect(url, {useNewUrlParser:true}, (err=>{
    if (err) console.log(err)
    console.log("connected to database")
}))

// async function run(){
//     const findUser=await new UserCollection.find()
// }

// run()





app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)
app.use(express.static('public'))
app.use(express.json())
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img/rice', express.static(path.join(__dirname, "public/img")))
// app.use('/img', express.static(__dirname+'public/img'))
app.use('/icons', express.static(__dirname+'public/icons'))



app.use('/login', login)
app.use('/home', home)
app.use('/auth', auth)
app.use('/checkout', checkout)
app.use('/collections', collections)
app.use('/customer', CusService)
app.use('/user', user)

app.listen(port)