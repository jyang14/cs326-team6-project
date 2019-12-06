const mongoose = require('mongoose')

/**
 * @typedef {object} Food
 * @property {Date} Date
 * @property {string} location
 * @property {string} name
 * @property {string} user
 *
 */

/**
 * @type {import('mongoose').Schema<Food>}
 */
const foodSchema = new mongoose.Schema({
  date: Date,
  location: String,
  name: String,
  user: String
})

/**
 * @type {import('mongoose').Model<Food & import('mongoose').Document, {}>}
 */
module.exports = mongoose.model('Food', foodSchema)
