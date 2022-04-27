const express = require('express');
const route = require('./route');
const server = express();
const path = require('path');

server.use(express.static("public"));
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true}))
server.use(route);

server.listen(process.env.PORT || 3000, () => console.log('up'))
