const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./db');
const port = 1337;

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
const routes = require('./routes')(app);
app.listen(port,function() {
    console.log(`server started: ${port}`);
})