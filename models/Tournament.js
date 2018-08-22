const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Tournament = new Schema({
    name: String,
    city: String,
    state: String,
    country: String,
    startDate: String,
    endDate: String,
    useSPRegistration: Boolean,
    usRegistrationKey: Boolean,
    cost: Number,
    description: String,
    logoUrl: String,
    adminProfile: String,
    registeredParticipants: Array
})

module.exports = mongoose.model('tournaments', Tournament)