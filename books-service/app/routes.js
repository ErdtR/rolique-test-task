const express = require('express')
const router = express.Router()
const controller = require('./controllers/book.controller')

module.exports = router

// create new book
router.post('/', controller.createBook)

// get all books
router.get('/', controller.getBooks)

// get book by id
router.get('/:id', controller.getBook)

// delete specific book
router.delete('/:id', controller.deleteBook)

//update specific book
router.put('/:id', controller.updateBook)
