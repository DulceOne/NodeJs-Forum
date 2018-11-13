var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(express.static(__dirname + '/'));
app.use (bodyParser.urlencoded ({
   	extended: true,
	limit: '50mb'
}));
app.use (bodyParser.json ({
   	extended: true,
	limit: '50mb'
}));
app.use(cookieParser());

app.listen(1337,function() {
    console.log('server started: 1337');
})