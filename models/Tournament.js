/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Tournament = new Schema({
  name: String,
  city: String,
  state: String,
  country: String,
  startDate: String,
  endDate: String,
  useSPRegistration: Boolean,
  useRegistrationKey: Boolean,
  cost: Number,
  description: String,
  logoUrl: String,
  adminProfile: String,
  registeredParticipants: Array,
  events: Array,
  judges: Array,
});

module.exports = mongoose.model('tournaments', Tournament);
