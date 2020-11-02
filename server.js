var config = require('./config/index');
const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const bodyparser = require('body-parser');
const orderController = require('./controllers/orderController');
var mongoose = require("mongoose");
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('views', express.static(path.join(__dirname + 'views')));               //SỬA THÊM EXPRESS.STATCI

// view engine setup
app.engine('hbs', expressHbs({
    defaultLayout: 'mainLayout',
    extname:'hbs',
    layoutsDir: __dirname + '/views',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'hbs');orderController

//db info
mongoose.connect(config.getDbConnectionString());

app.listen(3000, ()=>{
    console.log('Server on port: 3000');
});

app.use('/', orderController);
