const express = require('express')
const Recaptcha = require('express-recaptcha').Recaptcha
const router = express.Router()
const path = require('path')
const Article = require('../models/Article')
let recaptcha = new Recaptcha(process.env.CAP_SITE, process.env.CAP_SECRET)
/* let routes = ['/',
              '/articles',
              '/article/:article',
              '/profile/:profile',
              '/contribute',
              '/gear-list',
              '/profile',
              '/admin',
              '/register',
              '/login']

routes.forEach( x => {
    router.get(x,(req,res) => {
        res.sendFile(path.join(__dirname,'..','/public/index.html'))
    })
}) */

router.get('contribute',recaptcha.middleware.render, function(req, res){
    res.sendFile(path.join(__dirname,'..','/public/index.html'))
})

/* app.get('/', recaptcha.middleware.render, function(req, res){
    res.render('login', { captcha:res.recaptcha });
  }); */

router.get('/sitemap',(req,res) => {
    res.sendFile(path.join(__dirname,'..','/assets/dist/sitemap.xml'))
})

router.get('/googleae3ac4f178c3c8ea.html', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/googleae3ac4f178c3c8ea.html'))
})

router.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/index.html'))
})

module.exports = router