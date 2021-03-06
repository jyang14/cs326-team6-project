require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const history = require('connect-history-api-fallback')

const secret = require('./secret')

const middleware = require('./config/middleware')
const routes = require('./config/routes')

mongoose.connect(secret.mongodbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

middleware(app, express)

routes(app, express)

app.use(history())
app.use('/', express.static(path.join(__dirname, '../client/build')))

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server started at port ${port}`))
