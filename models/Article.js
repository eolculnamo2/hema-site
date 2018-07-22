const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Article = new Schema({
    title: String,
    author: String,
    imgUrl: String,
    body: Array,
    date_written: String,
    comments: Array,
    likes: Number,
    type: String
})

module.exports = mongoose.model('articles', Article)
