var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
<<<<<<< HEAD
<<<<<<< HEAD

var routes = require('./routes/index');
var users = require('./routes/users');

=======
var routes = require('./routes/index');
var users = require('./routes/users');
var mongodb = require('mongodb');//mongodb
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
=======
var routes = require('./routes/index');
var users = require('./routes/users');
var mongodb = require('mongodb');//mongodb
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
<<<<<<< HEAD
<<<<<<< HEAD
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
=======
app.use(express.static(path.join(__dirname, '/')));
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
=======
app.use(express.static(path.join(__dirname, '/')));
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

<<<<<<< HEAD
<<<<<<< HEAD
// error handlers

=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
app.listen(3000);

module.exports = app;
=======
=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a

var  dbserver  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});//mongodb 端口配置
var  db = new mongodb.Db('test', dbserver, {safe:true});//mongodb数据库名字 服务

var server = app.listen(3000, function () {
    console.info('Express server listening on port ' + server.address().port);
});//服务端口3000 

<<<<<<< HEAD
module.exports = app;
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
=======
module.exports = app;
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
