// require helper, User, List
var helper = require('../config/helpers.js')
// var User = require('../orms/userModel.js')
var Food = require('../orms/foodModel.js')
const mongoose = require('mongoose')

// var ObjectId = mongoose.Types.ObjectId();

module.exports = {
  add: function (req, res) {
    // TODO: Function to add item into database
    const newFood = new Food({
      name: req.body.name,
      id: mongoose.Types.ObjectId(),
      date: new Date(req.body.date), // new Date('August 19, 1975 23:15:30');
      location: req.body.location
    })
    newFood.save()
    res.json({ sucess: req.body.name + 'has been put in fridge' })
    // res.sendStatus(200) // Temporary Code *should be removed
  },

  find: function (req, res) {
    // TODO: Function to get all items from database
    let query = Food.find()
    if (req.body.name) {
      query = query.where('name').equals(req.body.name)
    }
    if (req.body.id) {
      query = query.where('id').equals(req.body.id)
    }
    if (req.body.date) {
      query = query.where('date').equals(req.body.date)
    }
    if (req.body.location) {
      query = query.where('location').equals(req.body.location)
    }
    res.json({ foods: query })
    // res.sendStatus(200) // Temporary code *should be removed
  },

  remove: function (req, res) {
    // TODO: Function to delete item with id available from req.params.id
    Food.deleteOne(req.body, function (err) {
      if (err) {
        helper.sendError(err, req, res)
        // return handleError(err);
      }
      // deleted at most one food document
    })
    res.sendStatus(200) // Temporary code *should be removed
  }
}
