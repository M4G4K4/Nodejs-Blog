module.exports = (req,res) =>{
    // If the user is not logged in it redirects to the login page
    if(req.session.userId){
        return res.render('create')
    }

    res.redirect('/auth/login');
}