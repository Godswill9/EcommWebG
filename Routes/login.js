const express=require('express')
const route=express.Router()
const UserCollection=require('../Databases/schema')
//these are for user authentication
// const passport=require('passport')
// const LocalStrategy=require('passport-local').Strategy

// function initializePassport(passport){
//     const authenticateUser=(email, password, done)=>{
//            const userrr=getUserByEmail(email)
//            if(user ==null){
//                return done(null, false, {message:"no user with that email"})
//            }
//            if(password ==null){
//             return done(null, false, {message:"no user with that "})
//            }
//     }
//   passport.use(new LocalStrategy({usernameField:"email"}), authenticateUser)
//   passport.serializeUser((user, done)=>{})
//   passport.deserializeUser((id, done)=>{})
// }

route.get('/', (req, res)=>{
    res.render('login')
    console.log("here is the login route")
})

route.post('/', async (req, res)=>{
    try{
        const{email, password}=req.body;
        const userDb= await UserCollection.findOne({$or:[{email},{password}]})
     if(req.body && userDb){
         console.log('USER ALLOWED')
         res.redirect('home');    
     }
    else{
       res.send('not allowed');
       res.redirect('login')
       console.log("NOT ALLOWED")
    }
    }catch(err){
    console.log(err)
    }
        
})

module.exports=route