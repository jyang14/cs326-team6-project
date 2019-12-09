const foodRouter = require('../routers/foodRouter')

/**
 * @param {import('express').Application} app
 * @param {import('express')} express
 */
module.exports = (app, express) => {
  app.use('/api/food', foodRouter)
}
