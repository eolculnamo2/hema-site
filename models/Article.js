/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Article = new Schema({
  title: String,
  author: String,
  imgUrl: String,
  url: String,
  body: Array,
  date_written: String,
  comments: Array,
  likes: Number,
  type: String,
  // structuredData: String,
});

module.exports = mongoose.model('articles', Article);
