const Book = require('../models/book')

module.exports = {
  createBook: createBook,
  getBooks: getBooks,
  getBook: getBook,
  deleteBook: deleteBook,
  updateBook: updateBook
}

function createBook(req, res, next) {
  return Book.create({
    title: req.body.title,
    author: req.body.author,
    releaseDate: req.body.releaseDate
  })
    .then(book => res.status(200).send(book))
    .catch(err => next(new Error(err)))
}

function getBooks(req, res, next) {
  return Book.find({})
    .then(books => res.status(200).send(books))
    .catch(err => next(new Error(err)))
}

function getBook(req, res, next) {
  return Book.findById(req.params.id)
    .then(book => {
      if(!book) return res.status(404).send('Book with id {' + req.params.id + '} not found!')
      res.status(200).send(book)
    })
    .catch(err => next(new Error(err)))
}

function deleteBook(req, res, next) {
  return Book.findByIdAndRemove(req.params.id)
    .then(book => res.status(200).send(book))
    .catch(err => next(new Error(err)))
}

function updateBook(req, res, next) {
  return Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(book => res.status(200).send(book))
    .catch(err => next(new Error(err)))
}