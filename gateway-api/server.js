const express = require('express')
const helmet = require('helmet')
const proxy = require('http-proxy-middleware')

const usersAPIAddress = process.env.USERS_API_ADDRESS
const booksAPIAddress = process.env.BOOKS_API_ADDRESS

const routes = [
  {route: '/users', targetUrl: 'http://' + usersAPIAddress + ':3000'},
  {route: '/books', targetUrl: 'http://' + booksAPIAddress + ':3000'}
]

const app = express()

app.use(helmet())

for(let route of routes) {
  app.use(route.route, proxy({target: route.targetUrl, changeOrigin: true}))
}

app.listen(3000)


