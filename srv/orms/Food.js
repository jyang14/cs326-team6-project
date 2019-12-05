const mongoose = require('mongoose')

var foodSchema = new mongoose.Schema({
  date: Date,
  id: mongoose.Schema.Types.ObjectId,
  location: String,
  name: String,
  user: String
})

module.exports = mongoose.model('Food', foodSchema)
