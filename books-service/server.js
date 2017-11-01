const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')
const bookRouter = require('./app/routes')
const app = express()
const port = 8080

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/rolique_test', { useMongoClient: true });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(helmet())

app.use('/books', bookRouter)

app.listen(port, () => {
  console.log('App listening on port: ' + port)
})