const path = require('path')
const history = require('connect-history-api-fallback')
const morgan = require('morgan')

/**
 * @param {import('express').Application} app
 * @param {import('express')} express
 */
module.exports = (app, express) => {
  app.use(history())
  app.use(express.static(path.join(__dirname, '../dist')))
  app.use(morgan('dev'))
}