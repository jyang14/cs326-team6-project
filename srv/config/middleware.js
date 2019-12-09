const bearerToken = require('express-bearer-token')
const morgan = require('morgan')

/**
 * @param {import('express').Application} app
 * @param {import('express')} express
 */
module.exports = (app, express) => {
  app.use(morgan('dev'))

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  app.use(bearerToken())
}
