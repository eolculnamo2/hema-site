const express = require('express')
const router = express.Router()
const path = require('path')
const Article = require('../models/Article')
let routes = ['/',
              '/articles',
              '/article/:article',
              '/contribute',
              '/gear-list',
              '/admin']

routes.forEach( x => {
    router.get(x,(req,res) => {
        res.sendFile(path.join(__dirname,'..','/public/index.html'))
    })
})

router.get('/sitemap',(req,res) => {
    res.sendFile(path.join(__dirname,'..','/assets/dist/sitemap.xml'))
})

module.exports = router