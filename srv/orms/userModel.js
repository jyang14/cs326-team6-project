const mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  id: Schema.Types.ObjectId,
  password: String
})

module.exports = mongoose.model('User', userSchema)
