const LocalStrategy=require('passport-local').Strategy;
const bcrypt=require('bcrypt')

//database model
const UserDb=require('../Databases/schema')

module.exports= function(passport){
    passport.use(
        new LocalStrategy({usernameField:'email'}, (email, password, done)=>{
            //match user
            UserDb.findOne({
                email:email
            }).then(user=>{
                if(!user){
                    return done(null, false, {message:"that email is not registered"})  
                }

                //match password
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err) throw err
                    if(isMatch){
                        return done(null, user);
                    }else{
                        return done(null, false, {message:"password incorrect"})
                    }
                })
            })
        })
    )

//serialize and deserialize users
   passport.serializeUser(function(user, done){
       done(null, user.id)
   });

   passport.deserializeUser(function(id, done){
       UserDb.findById(id, function(err, user){
        done(err, user)
       })
       
   })
}