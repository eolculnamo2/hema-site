const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')


var User = new Schema({
    username: String,
    password: String,
    email: String,
    displayName: String,
    headline: String,
    profileImage: String,
    location: String,
    group: String,
    bestThree: Array,
    articles: Array,
    likedArticles: Array,
    contacts: Array,
    groupMembers: Array
})

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User)