const express = require('express')
const mongoose = require('mongoose')

const { jwtCheck, getUserIdFromToken } = require('../config/auth')

const Food = require('../orms/Food.js')

const router = express.Router()

// For debug only
// router.post('/all', async (req, res) => {
//   // all food in database
//   const a = Food.find()

//   // fields are : "_id", "name", "location", "userId", "date",  "__v"
//   res.json(await a.exec())
// })

router.get('/', jwtCheck, async (req, res) => {
  try {
    const query = Food.find({
      ...req.body,
      userId: await getUserIdFromToken(req.token)
    })

    // return all food we found to client
    res.status(200).json(await query.exec())
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.post('/', jwtCheck, async (req, res) => {
  try {
    // create new food item using the data from req
    const newFood = new Food({
      name: req.body.name,
      id: mongoose.Types.ObjectId(),
      date: new Date(req.body.date),
      location: req.body.location
    })
    // save new food to database
    res.status(200).json(await newFood.save())
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.delete('/', jwtCheck, async (req, res) => {
  try {
    const food = await Food.findById(req.body.id).exec()
    if ((await getUserIdFromToken(req.token)) === food.user) {
      res.status(204).send()
    } else {
      res.status(401).send()
    }
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

module.exports = router
