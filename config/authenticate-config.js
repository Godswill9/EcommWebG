module.exports={
    ensureAuthentication: (req, res, next)=>{
        if(req.isAuthenticated()) return next()
        res.redirect('login')
    },

    forwardAuthenticated:(req, res, next)=>{
        if(!req.isAuthenticated()) return next()
       
    }
   
}