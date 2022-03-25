const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))
const { dirname } = require('path')
const { appendFile } = require('fs')



server.use(route)
server.listen(7000, () => console.log("Run"))