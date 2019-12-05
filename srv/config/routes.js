/**
 * @param {import('express').Application} app
 * @param {import('express')} express
 */
var userHandler = require('../handlers/userHandler.js')
var foodHandler = require('../handlers/foodHandler.js')

module.exports = (app, express) => {
  /* TODO: Insert routes */
  app.post('/api/signup', userHandler.signup)
  app.post('/api/login', userHandler.signin)

  app.post('/api/add', foodHandler.add)
  app.post('/api/remove', foodHandler.remove)
  app.post('/api/find', foodHandler.find)
  app.post('/api/all', foodHandler.all)
}
