const express = require('express')
const request = require('request');
const router = express.Router()
const bodyParser = require('body-parser')
const Article = require('../models/Article')
const User = require('../models/User')
const mailer = require('../services/mailer')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/new-article', (req,res) => {
    if(req.body.test === process.env.ADMINPASS){
        new Article({
            title: req.body.title,
            author: req.body.author,
            username: req.body.username,
            imgUrl: req.body.imgUrl,
            body: req.body.body,
            date_written: new Date(),
            comments: [],
            likes: 0,
            type: ""
        }).save((err,article) => {
            console.log(JSON.stringify(article))
            User.findOneAndUpdate({username: req.body.username}, {$push: {articles: article}}, (err, response) => {
                return res.send({data:'saved'})
            })
        })
    }
    else{
        return res.send({data: "failed"})
    }
})

router.post('/get-article', (req,res) => {
    //http://imgbox.com/g/XQnl4EGpOv
    if(req.body != undefined) {
        Article.findOne({_id: req.body.id}, (err,response) => {
            if (err) {
                return res.send('Invalid URLs')
            }
            else {
                let newBody = response.body[0].split('**P**')
                response.body = newBody
                res.send(response)
            }
        })
    }
    else {
        return res.send('Invalid url')
    }
})

router.get('/get-all-articles',(req,res) => {
    Article.find({}, (err,result)=>{
        res.send(result)
    })
})

router.post('/add-article-comment', (req,res) => {
    if(req.body != undefined) {
        Article.findOneAndUpdate({_id: req.body.idString}, {$push: {comments: {comment: req.body.comment, author: req.body.name}}}, (err,response) => {
            if (err) {
                console.log(err)
                return res.send({status: 'Comment failed'})
            }
            else {
                res.send({status: 'sent'})
            }
        })
    }
    else {
        return res.send({status: 'Comment failed'})
    }
})

router.post('/process-submission',(req,res) => {
    let verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.CAP_SECRET + "&response=" + req.body.captcha
    request(verificationUrl,function(error,response,body) {
        let x = JSON.parse(body)
        console.log(x.success)
        if(x.success == true){
            mailer.notifyOfEmail(req.body.title,
                                 req.body.author,
                                 req.body.username, 
                                 req.body.email, 
                                 "", 
                                 req.body.body)
                return res.send({data: "sent"})
            }
            else{
                return res.send({data: 'Please Try Again'})
            }
        })
    })

module.exports = router