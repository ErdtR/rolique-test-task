const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')
const bookRouter = require('./app/routes')
const mongoAddress = process.env.MONGO_ADDRESS
const mongoDb = 'rolique_test'
const mongoConnection = 'mongodb://' + mongoAddress + '/' + mongoDb 
const app = express()
const port = 3000

mongoose.Promise = Promise

mongoose.connect(mongoConnection, { useMongoClient: true });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(helmet())

app.use('/books', bookRouter)

app.listen(port, () => {
  console.log('App listening on port: ' + port)
})