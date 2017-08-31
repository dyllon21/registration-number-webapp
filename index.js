'use strict';

var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');

var RegNumberRoutes = require('./regNumbers');
var Models = require('./models');

var models = Models('mongodb://localhost/towns');
var regNumberRoutes = RegNumberRoutes(Registrations);

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/towns";

app.use(express.static('public'));
app.use(express.static('views'));
app.use(flash());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30
  },
  resave: true,
  saveUninitialized: true
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// create a route
app.get('/reg_number/:id', function(req, res) {
  console.log(req.params.id);
  res.send(req.params.id);
});

app.get('/regNumbers', regNumberRoutes.index);
app.get('/regNumbers/add', regNumberRoutes.addScreen);
app.get('/regNumbers', regNumberRoutes.filter)
app.post('/regNumbers', regNumberRoutes.filter)
app.post('/regNumbers/add', regNumberRoutes.add);



//start the server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('registration numbers app started on port : ' + port);
});
