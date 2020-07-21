// Validade if all the fields are filled
module.exports = (req,res,next) =>{
   
    if(!req.body.title ||!req.body.subtitle || !req.body.content || !req.files){
        console.log('asdasdasd');
        return res.redirect('/posts/new');
    }

    next();
}
