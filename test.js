const mongoose = require('mongoose');

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node_blog_test')

// ------------------------------------------------------------
/* Create Data
Post.create({
    title:"My title blog post",
    description:"Blog post description",
    content:"Lorem ipsum content"
}, (error,post) =>{
    console.log(error, post)
})
*/

/*
Post.create({
    title:"My 3rd blog post",
    description:"Description",
    content:"Some content"
}, (error,post) =>{
    console.log(error, post)
})
*/

// ------------------------------------------------------------

/*
// Find by title
Post.find({
    title:"My title blog post"
},(error,post)=>{
    console.log(error,post)
})
*/

/*
// Find all 
Post.find({},(error,post)=>{
    console.log(error,post)
})
*/

/*
// Find by ID
Post.findById("5f11fd7bc240c63424b95018",(error,post)=>{
    console.log(error,post)
})
*/

// ------------------------------------------------------------
/*
Post.findByIdAndUpdate("5f11fd7bc240c63424b95018",{
    title:"New post Title"
},(error,post)=>{
    console.log(error, post)
})
*/