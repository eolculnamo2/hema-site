/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const Article = require('../models/Article');
const User = require('../models/User');
const mailer = require('../services/mailer');
const redirects = require('./helpers/redirects');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/new-article', (req, res) => {
  if (req.body.test === process.env.ADMINPASS) {
    new Article({
      title: req.body.title,
      author: req.body.author,
      username: req.body.username,
      imgUrl: req.body.imgUrl,
      url: req.body.url,
      body: req.body.body,
      date_written: new Date(),
      comments: [],
      likes: 0,
      structuredData: '',
      type: '',
    }).save((err, article) => {
      console.log(JSON.stringify(article));
      User.findOneAndUpdate({ username: req.body.username },
        { $push: { articles: article } },
        () => res.send({ data: 'saved' }));
    });
  } else {
    return res.send({ data: 'failed' });
  }
});

router.post('/get-article', (req, res) => {
  if (redirects[req.body.url]) {
    return res.redirect(301, `https://www.sword-point.com/article/${redirects[req.body.url]}`);
  }
  const url = redirects[req.body.url] || req.body.url;
  // http://imgbox.com/g/XQnl4EGpOv
  if (req.body) {
    Article.findOne({ url }, (err, response) => {
      if (err) {
        return res.send('Invalid URLs');
      } else {
        const newBody = response.body[0].split('**P**');
        response.body = newBody;
        res.send(response);
      }
    });
  } else {
    return res.send('Invalid url');
  }
});

router.post('/get-all-articles', (req, res) => {
  Article.find({}, (err, result) => {
    res.send(result);
  });
});

router.post('/add-article-comment', (req, res) => {
  if (req.body) {
    Article.findOneAndUpdate({ _id: req.body.idString },
      { $push: { comments: { comment: req.body.comment, author: req.body.name } } },
      (err) => {
        if (err) {
          console.log(err);
          return res.send({ status: 'Comment failed' });
        } else {
          res.send({ status: 'sent' });
        }
      });
  } else {
    return res.send({ status: 'Comment failed' });
  }
});

router.post('/process-submission', (req, res) => {
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAP_SECRET}&response=${req.body.captcha}`;
  request(verificationUrl, (error, response, body) => {
    const x = JSON.parse(body);
    console.log(x.success);
    if (x.success === true) {
      mailer.notifyOfEmail(req.body.title,
        req.body.author,
        req.body.username,
        req.body.email,
        '',
        req.body.body);
      return res.send({ data: 'sent' });
    } else {
      return res.send({ data: 'Please Try Again' });
    }
  });
});

module.exports = router;
