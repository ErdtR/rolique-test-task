const express = require('express')
const router = express.Router()
const controller = require('./controllers/user.controller')

module.exports = router

// create new book
router.post('/', controller.createUser)

// get all books
router.get('/', controller.getUsers)

// get book by id
router.get('/:id', controller.getUser)

// delete specific book
router.delete('/:id', controller.deleteUser)

//update specific book
router.put('/:id', controller.updateUser)
