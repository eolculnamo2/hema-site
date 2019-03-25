/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
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
  groupMembers: Array,
  // Tournaments
  hosting: Array,
  registeredFor: Array,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
