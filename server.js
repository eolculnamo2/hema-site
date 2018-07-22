require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const app = express()
const mongoose = require('mongoose')

app.use(helmet())

//import routes 
const pages = require('./routes/pages')
const posts = require('./routes/posts')

mongoose.connect(process.env.DB)
mongoose.connection.once('open',()=>{
    console.log("Connected to Mongo via Mongoose")
    }).on('error',(err)=>{
      console.log("Connection Error: " + err)
    })


app.use(express.static('assets/dist'))

//assign routes
app.use('/', pages)
app.use('/posts', posts)

app.listen(8080,() => {
    console.log("ON")
})
