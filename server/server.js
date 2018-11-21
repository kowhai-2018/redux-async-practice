const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const dogRoutes = require('./dog')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)
server.use('/api/v1/dog', dogRoutes)

module.exports = server
