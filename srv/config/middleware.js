const morgan = require('morgan')
var bodyParser = require('body-parser')
/**
 * @param {import('express').Application} app
 * @param {import('express')} express
 */
module.exports = (app, express) => {
  app.use(morgan('dev'))

  // use bodyParser
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
}
