const mongoose = require('mongoose')
var Schema = mongoose.Schema

var foodSchema = new Schema({
  name: String,
  date: Date,
  location: String,
  userId: String
})

module.exports = mongoose.model('Food', foodSchema)
