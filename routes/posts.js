const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Article = require('../models/Article')
const mailer = require('../services/mailer')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/new-article', (req,res) => {
    if(req.body.test === process.env.ADMINPASS){
        new Article({
            title: req.body.title,
            author: req.body.author,
            imgUrl: req.body.imgUrl,
            body: req.body.body,
            date_written: new Date(),
            comments: [],
            likes: 0,
            type: ""
        }).save().then(() => {
            return res.send({data:'saved'})
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
    mailer.notifyOfEmail(req.body.title,
                         req.body.author, 
                         req.body.email, 
                         req.body.image, 
                         req.body.body)
    res.send({data: "sent"})
})

module.exports = router