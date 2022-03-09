const express = require('express')

const QuestionController = require('./controllers/QuestiionController');
const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }));
route.get('/room', (req, res) => res.render("room"));
route.get('/create-room', (req, res) => res.render("index", { page: 'create-room' }));

route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route