const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')
const userRouter = require('./app/routes')
const app = express()
const mongoAddress = process.env.MONGO_ADDRESS
const mongoDb = 'rolique_test'
const mongoConnection = 'mongodb://' + mongoAddress + '/' + mongoDb 
const port = 3000

mongoose.Promise = Promise

mongoose.connect(mongoConnection, { useMongoClient: true });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(helmet())

app.use('/users', userRouter)

app.listen(port, () => {
  console.log('App listening on port: ' + port)
})