var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const pianistsRouter = require('./routes/pianists')
const bassistsRouter = require('./routes/bassists')
const drummersRouter = require('./routes/drummers')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pianists', pianistsRouter);
app.use('/bassists', bassistsRouter);
app.use('/drummers', drummersRouter)

module.exports = app;
