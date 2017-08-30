'use strict'

var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');

var RegNumberRoutes = require('./regNumbers');
var regNumberRoutes= RegNumberRoutes();

app.use(express.static('public'));
app.use(express.static('views'));

app.use(bodyParser.urlencoded({
  extended:false
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
app.get('/reg_number/:id', function (req, res) {
  console.log(req.params.id);
 res.send(req.params.id);
});

app.get('/regNumbers', regNumberRoutes.index);
app.get('/regNumbers/add', regNumberRoutes.addScreen);



//start the server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('web app started on port : ' + port);
});
