const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../models/User')
const Tournament = require('../models/Tournament')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/new-tournament',(req,res) => {
    let splitLocation = req.body.location.split(',')
    new Tournament ({
        name: req.body.name,
        city: splitLocation[0],
        state: splitLocation[1],
        country: splitLocation[2],
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        useSPRegistration: req.body.useSPRegistration,
        usRegistrationKey: req.body.useKey,
        cost: req.body.cost,
        description: req.body.description,
        logoUrl: req.body.logoUrl,
        adminProfile: "TODO"
    }).save().then(() => res.send("check"))
})

module.exports = router;