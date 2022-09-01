const express = require('express');
const routes = require('./controllers/');
const path = require('path');
const {engine} = require('express-handlebars');

//create express web app
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//turn on the routes
app.use(routes);

//start the web server
app.listen(PORT, () => console.log('Now listening'));