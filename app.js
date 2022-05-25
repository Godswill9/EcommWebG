if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}

const express=require('express')
const app=express()
// const port=3000;
const port=process.env.PORT  ||  3000
const path=require('path')
const bodyParser=require('body-parser')
const passport=require('passport')
const flash=require('express-flash')
const session=require('express-session')
const crypto=require('crypto')
const mongoStore=require('connect-mongo')
const nodeMailer=require('nodemailer')


//all routes imported
const home=require('./Routes/homePage')
const auth=require('./Routes/auth')
const checkout=require('./Routes/checkout')
const login=require('./Routes/login')
const user=require('./Routes/user')
const collections=require('./Routes/collections')
const CusService=require('./Routes/CusService')
const logout=require('./Routes/logout')
require('./config/passport-config')(passport)



//databases incoming
const mongoose=require('mongoose')
const url= "mongodb://localhost:27017/mydb"


//databases
mongoose.connect(url, {useNewUrlParser:true}, (err=>{
    if (err) console.log(err)
    console.log("connected to database")
}))

const UserCollection=require('./Databases/schema')

app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express)
app.use(express.static('public'))

app.use('/css', express.static(__dirname+'public/css'))
app.use('/img/rice', express.static(path.join(__dirname, "public/img")))
// app.use('/img', express.static(__dirname+'public/img'))
app.use('/icons', express.static(__dirname+'public/icons'))

// const memoryStore= new session.MemoryStore()


//express session
app.use(
    session({
        secret:'secret',
        resave:false,
        saveUninitialized:false,
        store:mongoStore.create({
            mongoUrl:url
        })
    })
)

//passport middleware

app.use(passport.initialize())
app.use(passport.session())


//connect flash
//  app.use(flash())

//  //Global variables
 






app.use('/login', login)
app.use('/home', home)
app.use('/auth', auth)
app.use('/logout', logout)
app.use('/checkout', checkout)
app.use('/collections', collections)
app.use('/dashboard', CusService)
app.use('/user', user)

app.listen(port)