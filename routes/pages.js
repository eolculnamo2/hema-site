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

/* 
 router.get('contribute',recaptcha.middleware.render, function(req, res){
    res.sendFile(path.join(__dirname,'..','/public/index.html'))
})

 app.get('/', recaptcha.middleware.render, function(req, res){
    res.render('login', { captcha:res.recaptcha });
  });  */

router.get('/sitemap',(req,res) => {
   // console.log(path.join(__dirname,'..','/assets/dist/sitemap.xml'));
    res.sendFile(path.join(__dirname,'..','/assets/dist/sitemap.xml'))
})

router.get('/googleae3ac4f178c3c8ea.html', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/googleae3ac4f178c3c8ea.html'))
})

router.get('*',(req,res) => {
    let context = {}
    let reactDom = renderToString(
    <StaticRouter context = {context} location={req.url}>
    <App />
    </StaticRouter>)
    //insert with into ReactDOM string with Mongoose;
    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127175903-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-127175903-1');
        </script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Read, share, discuss, and publish about Historical European Martials Arts (HEMA) also known as the Martial Arts of Renaissance Europe. Getting started with HEMA?  Check out our beginner's guides? Experienced renaissance martial artist? Why not submit an article?">
        <link rel="icon" href="https://image.ibb.co/c76tRy/head_icon.png" sizes="16x16 32x32" type="image/png"> 
        <meta name="keywords" content="HEMA, ARMA, longsword, spear, sword, buckler, pike, staff, mma, martial arts, wrestling, grappling, boxing, fighting, fight, learn, gear, fencing">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/style.css">
        <title>Sword Point</title>
    </head>
    <body>
        <div id="app">
        ${reactDom}
        </div>
        <script src="/style.js"></script>
        <script src="/vendors.js"></script>
        <script src="/bundle.js"></script>
    </body>
    </html>
        `
    
    // if(req.url.split('/article/').length > 1){
    //     let articleId = req.url.split('/article/')[1]

    //     Article.findById({_id: articleId}, (err,info) => {
    //         if(err) {
    //             console.log(err);
    //         }
    //         else if(info.type === 'HTML') {
    //             let sentHtml =  `
    //             <h3 class="title title--article">5 Drills for HEMA as a Martial Art</h3>
    //             <div className="flex-body">
    //             <div></div>
    //             <div className="article-body-wrap">
    //             ` +info.body[0] + `</div></div>`;

    //             let head = `<head><title>`+info.title+`</title>
    //             <meta name="description" content='`+info.body[0].slice(0,100)+`' /> 
    //             <meta name="keywords" content='`+info.title+`,hema, arma, longsword, renaissance, knights, fighting, martial arts, buying, first' />
    //             `//</head> is already there.

    //         //^Could add keyworeds to Article Model

    //             let splitStr = htmlString.split('<div id="the-main-article-wrap"></div>')
    //             splitStr.splice(1,0,sentHtml)
    //             htmlString = splitStr.join("")

    //             let headStr = htmlString.split("<head>")
    //             headStr.splice(1,0,head)
    //             htmlString = headStr.join("");
    //         }
    //         res.send(htmlString)
    //     })
    // }
    // else {
    //     res.send(htmlString)
    // }
    res.send(htmlString)
})

export default router