const express = require('express')
const mongoose = require('mongoose')

const secret = require('./secret')

const middleware = require('./config/middleware')
const routes = require('./config/routes')

mongoose.connect(secret.mongodbConnectionString, { useNewUrlParser: true })

const app = express()

routes(app, express)

middleware(app, express)

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server started at port ${port}`))
