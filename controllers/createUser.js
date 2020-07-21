module.exports = (req,res)=>{

    res.render('register',{
        // Pass errors , fields not filled
        errors: req.flash('registrationErrors'),
        // Pass the data was already filled in the form
        data: req.flash('data')[0]
    })
}