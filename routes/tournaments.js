/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
const express = require('express');
const bodyParser = require('body-parser');
const userNameExists = require('./helpers/backend-helpers');
const User = require('../models/User');
const Tournament = require('../models/Tournament');
// const moment = require('moment');
// const passport = require('../services/passportMain');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/new-tournament', (req, res) => {
  new Tournament({
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
    registeredParticipants: [],
  }).save((err, tournament) => {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      User.findOneAndUpdate({ _id: req.user._id },
        { $push: { hosting: tournament } },
        (err2) => {
          if (err2) {
            console.log(err2);
            return res.send(err2);
          } else {
            res.send({ done: true });
          }
        });
    }
  });
});

router.post('/get-tournaments', (req, res) => {
  Tournament.find({}, (err, response) => {
    res.send(response);
  });
});

router.post('/get-my-tournaments', (req, res) => {
  if (req.user) {
    Tournament.find({}, (err, response) => {
      const myTournaments = [];
      response.forEach((x) => {
        if (req.user.username === x.adminProfile) {
          myTournaments.push(x);
        }
      });
      res.send(myTournaments);
    });
  } else {
    console.log('User not logged in');
    res.end('error');
  }
});

router.post('/get-a-tournament', (req, res) => {
  Tournament.findById({ _id: req.body.tournamentId }, (err, info) => {
    if (err) console.log(err);
    else {
      res.send(info);
    }
  });
});

router.post('/add-tournament-event', (req, res) => {
  const event = {
    name: req.body.event,
    participants: [],
  };
  Tournament.findByIdAndUpdate({ _id: req.body.tournamentId },
    { $push: { events: event } }, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ updated: true });
      }
    });
});

router.post('/add-tournament-judge', (req, res) => {
  const { username, club, tournamentId } = req.body;
  const judge = {
    username,
    club,
  };
  Tournament.findById({ _id: tournamentId }, (err1, response1) => {
    const userNotAlreadyJudge = response1.judges.every(x => x.username !== judge.username);

    /**
     * @todo Check user name exists and already listed as judge
     *  */

    if (userNotAlreadyJudge === false || userNameExists === false) {
      return res.send({ updated: false });
    }

    Tournament.findByIdAndUpdate({ _id: tournamentId },
      { $push: { judges: judge } },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          return res.send({ updated: true });
        }
      });
  });
});

router.post('/register-for-tournament', (req, res) => {
  /**
  * @todo filter restrict duplicate registrations.
  *  */
  if (req.user) {
    const participant = req.body;
    participant.username = req.user.username;
    participant.participantId = Math.floor(Math.random() * 1000000000000);
    Tournament.findById({ _id: req.body.tournamentId }, (err, info) => {
      // check for participantID duplicates
      let participantError = false;
      info.registeredParticipants.forEach((x) => {
        if (x && x.participantId === participant.participantId) {
          participantError = true;
        }
      });

      if (err || participantError) {
        console.log('error');
        res.send({ status: false });
      } else {
        Tournament.findByIdAndUpdate({ _id: req.body.tournamentId },
          { $push: { registeredParticipants: participant } }, (err2) => {
            if (err2) {
              console.log(err2);
              res.send({ status: false });
            } else {
              User.findByIdAndUpdate({ _id: req.user._id },
                { $push: { registeredFor: participant } }, (err3) => {
                  if (err3) {
                    console.log(err3);
                    res.send({ status: false });
                  } else {
                    res.send({ status: true });
                  }
                });
            }
          });
      }
    });
  } else {
    /**
     * @todo Will need to set up redirect to login page...
     */

    console.log('Not logged in');
    res.send({ status: false });
  }
});

router.post('/add-participant', (req, res) => {
  const participant = Object.assign({}, req.body);
  participant.participantId = Math.floor(Math.random() * 1000000000000);
  Tournament.findById({ _id: req.body.tournamentId }, (err, info) => {
    // check for participantID duplicates
    let participantError = false;
    info.registeredParticipants.forEach((x) => {
      if (x && x.participantId === participant.participantId) {
        participantError = true;
      }
    });
    if (err || participantError) {
      console.log('participantError');
      res.send({ status: false });
    } else {
      Tournament.findByIdAndUpdate({ _id: req.body.tournamentId },
        { $push: { registeredParticipants: participant } },
        (err2) => {
          if (err2) {
            console.log(err2);
            res.send({ status: false });
          } else {
            res.send({ status: true });
          }
        });
    }
  });
});

router.post('/update-participant', (req, res) => {
  Tournament.findById({ _id: req.body.tournamentId },
    (err, info) => {
      if (err) {
        console.log(err);
        res.send({ status: false });
      } else {
        // eslint-disable-next-line no-restricted-syntax
        for (const i in info.registeredParticipants) {
          if (info.registeredParticipants[i].participantId === req.body.participantId) {
            // eslint-disable-next-line no-param-reassign
            info.registeredParticipants[i] = req.body;
            break;
          }
        }
        Tournament.findByIdAndUpdate({ _id: req.body.tournamentId },
          { registeredParticipants: info.registeredParticipants },
          (err2) => {
            if (err2) {
              console.log(err2);
              res.send({ status: false });
            } else {
              res.send({ status: true });
            }
          });
      }
    });
});

router.post('/update-matches', (req) => {
  Tournament.findById({ _id: req.body.tournamentId }, (err, response) => {
    if (err) {
      console.log(err);
      return;
    }
    let replaceIndex = null;
    const updateObj = response.events.find((x, i) => {
      replaceIndex = i;
      return x.name === req.body.eventName;
    });
    if (replaceIndex !== null) {
      updateObj.matches = req.body.matches;
      response.events.splice(replaceIndex, 1, updateObj);
      Tournament.findByIdAndUpdate({ _id: req.body.tournamentId }, { events: response.events }, (err1) => {
        if (err1) {
          console.log(err1);
        }
      });
    }
  });
});
module.exports = router;
