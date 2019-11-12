const express = require('express')
const middleware = require('./config/middleware')

const app = express()

middleware(app, express)

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server started at port ${port}`))
