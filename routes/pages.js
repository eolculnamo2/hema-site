const express = require('express')
const Recaptcha = require('express-recaptcha').Recaptcha
const router = express.Router()
const path = require('path')
const Article = require('../models/Article')
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import App from '../src/App.js'
//let recaptcha = new Recaptcha(process.env.CAP_SITE, process.env.CAP_SECRET)


/* router.get('contribute',recaptcha.middleware.render, function(req, res){
    res.sendFile(path.join(__dirname,'..','/public/index.html'))
})

 app.get('/', recaptcha.middleware.render, function(req, res){
    res.render('login', { captcha:res.recaptcha });
  }); 

router.get('/sitemap',(req,res) => {
    res.sendFile(path.join(__dirname,'..','/assets/dist/sitemap.xml'))
})

router.get('/googleae3ac4f178c3c8ea.html', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/googleae3ac4f178c3c8ea.html'))
}) */

router.get('*',(req,res) => {
    let context = {}
    let reactDom = renderToString(
    <StaticRouter context = {context} location={req.url}>
    <App />
    </StaticRouter>)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Read, share, discuss, and publish about Historical European Martials Arts (HEMA) also known as the Martial Arts of Renaissance Europe. Getting started with HEMA?  Check out our beginner's guides? Experienced renaissance martial artist? Why not submit an article?">
        <link rel="icon" href="https://image.ibb.co/c76tRy/head_icon.png" sizes="16x16 32x32" type="image/png"> 
        <meta name="keywords" content="HEMA, ARMA, longsword, spear, sword, buckler, pike, staff, mma, martial arts, wrestling, grappling, boxing, fighting, fight, learn, gear, fencing">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sword Point</title>
    </head>
    <body>
        <div id="app">
        ${reactDom}
        </div>
        <script src="/0.bundle.js"></script>
        <script src="/bundle.js"></script>
    </body>
    </html>
        `)
})

export default router