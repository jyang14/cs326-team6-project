// require helper, User, List
var helper = require('../config/helpers.js')
// var User = require('../orms/userModel.js')
var Food = require('../orms/foodModel.js')
const mongoose = require('mongoose')

// var ObjectId = mongoose.Types.ObjectId();

module.exports = {
  add: function (req, res) {
    // create new food item using the data from req
    const newFood = new Food({
      name: req.body.name,
      id: mongoose.Types.ObjectId(),
      date: new Date(req.body.date), // new Date('August 19, 1975 23:15:30');
      location: req.body.location
    })
    // save new food to database
    newFood.save()
    //
    res.json({
      name: req.body.name,
      date: req.body.date,
      location: req.body.location
    })
    // res.sendStatus(200) // Temporary Code *should be removed
  },

  find: async function (req, res) {
    // all food in database
    let query = Food.find()

    // find the food based on the info from req
    if (req.body.name) {
      query = query.where('name').equals(req.body.name)
    }
    if (req.body._id) {
      query = query.where('_id').equals(req.body.id)
    }
    if (req.body.userId) {
      query = query.where('userId').equals(req.body.id)
    }
    if (req.body.date) {
      query = query.where('date').equals(req.body.date)
    }
    if (req.body.location) {
      query = query.where('location').equals(req.body.location)
    }

    // return all food we found to client
    res.json({ foods: await query.exec() })
  },

  remove: function (req, res) {
    // assuming the req.body only include info about the "primary key"
    Food.deleteOne(req.body, function (err) {
      if (err) {
        // res.status(500)
        helper.sendError(err, req, res)
      }
      // deleted at most one food document
    })

    // showing the success of the deletion
    res.json({ success: 'true' })
  },

  all: async function (req, res) {
    // all food in database
    const a = Food.find()

    // fields are : "_id", "name", "location", "userId", "date",  "__v"
    res.json(await a.exec())
  }
}
