const express = require('express')

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
      user: await getUserIdFromToken(req.token)
    }).sort('date')

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
      date: new Date(req.body.date),
      name: req.body.name,
      location: req.body.location,
      user: await getUserIdFromToken(req.token)
    })
    // save new food to database
    res.status(200).json(await newFood.save())
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.put('/:id', jwtCheck, async (req, res) => {
  try {
    const food = await Food.findById(req.params.id).exec()
    if ((await getUserIdFromToken(req.token)) === food.user) {
      food.name = req.body.name
      food.date = req.body.date
      food.location = req.body.location
      food.save()
      res.status(204).send()
    } else {
      res.status(401).send()
    }
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.delete('/:id', jwtCheck, async (req, res) => {
  try {
    const food = await Food.findById(req.params.id).exec()
    if ((await getUserIdFromToken(req.token)) === food.user) {
      await food.remove()
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
