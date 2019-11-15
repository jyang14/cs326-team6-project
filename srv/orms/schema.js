const mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  id: Schema.Types.ObjectId,
  password: String
})

module.exports = mongoose.model('User', userSchema)
// var foodSchema = new Schema({
//   name: String,
//   id: Schema.Types.ObjectId,
//   date: Date,
//   position: String
// })

// var User = mongoose.model('Blog', userSchema)

// var animalSchema = new Schema({ name: String, type: String });

// // assign a function to the "methods" object of our animalSchema
// animalSchema.methods.findSimilarTypes = function(cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// };
