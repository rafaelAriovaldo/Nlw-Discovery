const express = require('express')

const QuestionController = require('./controllers/QuestiionController');
const route = express.Router()
const RoomController = require('./controllers/RoomController')
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }));
route.get('/room/:room', RoomController.open)
route.get('/create-room', (req, res) => res.render("index", { page: 'create-room' }));
route.post('/enterroom/', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/room', RoomController.create)
module.exports = route