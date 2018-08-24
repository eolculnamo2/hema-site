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
        useRegistrationKey: req.body.useKey,
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

router.post('/get-tournaments',(req,res) => {
    Tournament.find({}, (err,response) => {
        res.send(response);
    })
})

router.post('/get-my-tournaments',(req,res) => {
    Tournament.find({}, (err,response) => {
        let myTournaments = []
        response.forEach( x => {
            if(req.user.username === x.adminProfile) {
                myTournaments.push(x)
            }
        })
        console.log(myTournaments)
        res.send(myTournaments);
    })
})

router.post('/add-tournament-event', (req,res) => {
    Tournament.findByIdAndUpdate({_id: req.body.tournamentId}, {$push: {events: req.body.event}}, (err,response)=> {
        if(err) {
            console.log(err)
        }
        else {
            res.send({updated: true})
        }
    })
})

module.exports = router;