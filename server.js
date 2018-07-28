require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')
const app = express()
const mongoose = require('mongoose')

app.use(helmet())

//import routes 
const pages = require('./routes/pages')
const posts = require('./routes/posts')
const authenticate = require('./services/passportMain')

mongoose.connect(process.env.DB)
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    })


app.use(express.static('assets/dist'))

app.use(session({ secret: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60*60*1000, secure: false, httpOnly: false }
    }))

app.use(passport.initialize());
app.use(passport.session());


//assign routes
app.use('/', pages)
app.use('/posts', posts)
app.use('/authenticate', authenticate)

app.listen(8080,() => {
    console.log("ON")
})
