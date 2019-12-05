const morgan = require('morgan')

/**
 * @param {import('express').Application} app
 * @param {import('express')} express
 */
module.exports = (app, express) => {
  app.use(morgan('dev'))
  app.use(express.json())
}
