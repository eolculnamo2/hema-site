const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../models/User')
const Tournament = require('../models/Tournament')
const moment = require('moment')

const passport = require('../services/passportMain')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/new-tournament',(req,res) => {
    new Tournament ({
        name: req.body.name,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        useSPRegistration: req.body.useSPRegistration,
        usRegistrationKey: req.body.useKey,
        cost: req.body.cost,
        description: req.body.description,
        logoUrl: req.body.logoUrl,
        adminProfile: req.user.username,
        registeredParticipants: []
    }).save((err, tournament) => {
        if(err) {
            console.log(err)
            return res.send(err)
        }
        else {
            User.findOneAndUpdate({_id: req.user['_id']}, {$push: {hosting: tournament}}, (err, update) => {
                if(err) {
                    console.log(err)
                    return res.send(err)
                }
                else {
                    res.send({done: true})
                }
            })
        }
    })
})

module.exports = router;