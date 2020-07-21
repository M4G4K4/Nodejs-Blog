const Post = require('../database/models/Post')


module.exports = async(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/post.html'))
    const post = await Post.findById(req.params.id).populate('author');

    // Render Post page and send post array 
    res.render('post',{
        post
    })
    
}