require('dotenv').config()
require('socket.io-client')
const express = require('express')
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')
const app = express()
const mongoose = require('mongoose')
//const socket = require('socket.io')
const http = require('http').Server(app);
const io = require('socket.io')(http, { serveClient: false });


app.use(helmet())

//import routes 
import pages from './routes/pages'
const posts = require('./routes/posts')
const authenticate = require('./services/passportMain')
const tournaments = require('./routes/tournaments')

mongoose.connect(process.env.DB, {useNewUrlParser: true })
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
app.use('/tournaments', tournaments)

if(io) {
    io.on('connection', socket => {
        socket.on('score', data => io.sockets.emit('score',data) )
    })
} else {
    console.log("IO not defined")
}

http.listen(8080,() => console.log("ON") )