const passport = require('passport')
const LocalStrategy = require('passport-local')
const mongoose = require('mongoose')
const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const Strategy = require('passport-local').Strategy
const mailer = require('./mailer')
//models
const User = require('../models/User');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Register New User
router.post('/register', (req, res) => {
  if(req.body.password === req.body.confirmPassword){
    User.register(new User({
                            username: req.body.username,
                            email: req.body.email,
                            displayName: req.body.displayName,
                            headline: req.body.headline,
                            profileImage: req.body.imageUrl,
                            location: req.body.location,
                            group: req.body.studyGroup,
                            bestThree: [req.body.skill1,req.body.skill2,req.body.skill3],
                            articles: [],
                            likedArticles: [],
                            contacts: [],
                            groupMembers: []
                             }), req.body.password.trim(), (err, account) => {
        if (err) {
            console.log(err.message)
            res.send(err.message)
        }
        else{
        passport.authenticate('local')(req, res, () => {
            mailer.welcomeUser(req.body.email, req.body.username)
            res.send({name: 'authenticated', user: req.user.username.trim(), data: "Registration Successful!"})
        })
        }
    })
  }
  else{
    res.send({data: "Passwords Do Not Match"});
  }
})

//Login
router.post('/login', passport.authenticate('local'),(req, res) => {
  if (!req.user) {
    res.send({
      name: 'invalid-credentials',
      data: "Login Failed. Please try Again."
    })
  }
  else if (req.user) {
      res.send({
        name: 'authenticated',
        user: req.user.username.trim(),
        data: "Login Successful!"
      })
  }
})

//Logout
router.get('/logout',(req,res) => {
  req.logout();
  res.send({name: 'success'})
})

router.post('/checkLogin',(req,res) => {
  if(req.user){
    res.json({loggedIn: true, user: req.user.username.trim()})
  }
  else if(!req.user){
    res.json({loggedIn: false})
  }
})

module.exports = router