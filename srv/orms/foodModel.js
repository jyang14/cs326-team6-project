const mongoose = require('mongoose')
var Schema = mongoose.Schema

var foodSchema = new Schema({
  name: String,
  id: Schema.Types.ObjectId,
  date: Date,
  location: String
})

module.exports = mongoose.model('Food', foodSchema)
