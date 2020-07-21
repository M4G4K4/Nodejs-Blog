const User = require('../database/models/User');

module.exports = (req,res) =>{
    User.create(req.body, (error,user) =>{
       
        if(error){
            // Array that contains the errors that happens in the registration
           const registrationErrors =  Object.keys(error.errors).map(key => error.errors[key].message)
           

           // Save the errros to the flash , so it will be displayed only one time
            req.flash('registrationErrors', registrationErrors)
            req.flash('data', req.body)

           return res.redirect('/auth/register');
        }
        res.redirect('/');
    })
}