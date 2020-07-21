const User = require('../database/models/User')

module.exports = (req,res,next)=>{
    // userId is the _id saved in the cookie/session
    User.findById(req.session.userId, (error,user)=>{
        if(error || !user){
            return res.redirect('/')
        }
        next();
    })  

}