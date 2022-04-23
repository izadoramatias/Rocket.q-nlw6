const express = require('express');
const route = express.Router();
const questionController = require('./controllers/question-controller');
const roomController = require('./controllers/room-controller');

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post("/enter-room", roomController.enter)

route.post("/question/create/:room", questionController.create)
// formato que o formulário da modal passará a informação
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route