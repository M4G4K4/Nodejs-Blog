// Packages
const {config, engine} = require('express-edge');
const express = require('express');
const edge = require('edge.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const cloudinary = require('cloudinary');
const connectFlash = require('connect-flash'); // elimintate erros message from the session , errors one last 1 life cycle


// Controllers
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const aboutPageController = require('./controllers/aboutPage');
const contactPageController = require('./controllers/contactPage');
const createUserController = require('./controllers/createUser');
const storeUserController = require('./controllers/storeUser');
const loginController= require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');



const app = express();
mongoose.connect('mongodb://localhost/node_blog')

const mongoStore = connectMongo(expressSession)

app.use(connectFlash())

cloudinary.config({
    api_key: '129686253857382',
    api_secret: 'xKoZ8nXg1P-eoznUlAWURkA5wTw',
    cloud_name: 'dytcvme2k'
})

app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))


app.use(express.static('public'))
app.use(engine);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())


// In all requests verify tif the authentication is done or not
app.use('*', (req,res,next)=>{
    edge.global('auth', req.session.userId)
    next();
})


// Middleware 
const storePostVerify = require('./middleware/storePost');
const auth = require('./middleware/auth')
const redirectIfAuthenticated = require('./middleware/redirectifAuthenticated');





app.set('views',`${__dirname}/views`)





// Routes
    app.get('/', homePageController)

    app.get('/about',aboutPageController);

    app.get('/contact',contactPageController);

    // Posts
    app.get('/post/:id',getPostController)

    // auth is the middleware function to verify if user is logged in 
    app.get('/posts/new',auth,createPostController)

    // storePostVerify is the middleware function to verify if all the fields are filled
    // auth is the middleware function to verify if user is logged in 
    app.post('/posts/store',auth,storePostVerify, storePostController)

    // Users
    // Page with register form 
    app.get('/auth/register',redirectIfAuthenticated,createUserController)

    // Code to register user in the database
    app.post('/users/register',redirectIfAuthenticated ,storeUserController);

    // Page with the login page
    app.get('/auth/login', redirectIfAuthenticated,loginController);

    // Execute code to actual login the user 
    app.post('/users/login',redirectIfAuthenticated ,loginUserController);

    app.get('/auth/logout', auth ,logoutController);

    app.use((req,res) =>{
        res.render('notfound')
    })




// -------------
app.listen(4000,() =>{
    console.log("App listen on port 4000");
})