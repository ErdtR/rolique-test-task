const express = require('express')
const helmet = require('helmet')
const proxy = require('http-proxy-middleware')

const routes = [
  {route: "/users", targetUrl: "http://localhost:3001"},
  {route:"/books", targetUrl: "http://localhost:3002"}
]

const app = express()

app.use(helmet())

for(let route of routes) {
  app.use(route.route, proxy({target: route.targetUrl, changeOrigin: true}))
}

app.listen(3000)


