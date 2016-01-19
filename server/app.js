'use strict';


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// setup logging
var log = require('./lib/logger');

// https://github.com/ForbesLindesay/browserify-middleware
var browserify = require('browserify-middleware');

// helps secure Express by setting various HTTP headers
// https://github.com/helmetjs/helmet
var helmet = require('helmet');

// limit connections
// https://github.com/defunctzombie/ratelimit-middleware
var ratelimit = require('ratelimit-middleware');

// https://github.com/gotwarlost/istanbul-middleware
var im = require('istanbul-middleware');
var isCoverageDisabled = (process.env.NODE_ENV === 'production');

//before your code is require()-ed, hook the loader for coverage
if (!isCoverageDisabled) {
    console.log('Hook loader for coverage - ensure this is not production!');
    //console.log(path.join(__dirname, '..'));
    im.hookLoader(path.join(__dirname, '..'));
        // cover all files except under node_modules
        // see API for other options
}

// default jade stuff
// var routes = require('./routes/index');
// var users = require('./routes/users');

var listModel = require('./models/list');
var listRouteV1 = require('./routes/v1/list');
var listRouteV2 = require('./routes/v2/list');

var pubDir = path.join(__dirname, '../client');

var app = express();

app.use(helmet());
app.use(ratelimit({
  burst: 10, // Max 10 concurrent requests (if tokens)
  rate: 0.5, // Steady state: 1 request / 2 seconds
  ip: true,
  overrides: {
    '::1': {
      burst: 0,
      rate: 0 // unlimited
    },
    '192.168.1.1': {
      burst: 0,
      rate: 0 // unlimited
    },
    '192.168.2.1/24': {
      burst: 0,
      rate: 0 // unlimited
    },
    '192.168.2.192/27': {
      burst: 0,
      rate: 0
    }
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /client
//app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));
app.use(logger('dev'));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(express.static(pubDir));
//app.use(express.static(covDir));

// default jade stuff
// app.use('/', routes);
// app.use('/users', users);

// Add model to req so it's accessible in routers
app.use(function(req, res, next) {
  //console.log('IP', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  req.model = listModel;
  next();
});



// API version routing.
var v1 = express.Router();
var v2 = express.Router();

// Place the express-winston logger before the router.
app.use(log.logger);

v1.use('/lists', express.Router()
  .post('*', listRouteV1.createList)
  .get('/:name', listRouteV1.retrieveList)
  .put('/:name', listRouteV1.updateList)
  .delete('/:name', listRouteV1.deleteList)
  .get('*', listRouteV1.allRetrieve)
  .delete('*', listRouteV1.allDelete));

v2.use('/lists', express.Router()
  .post('*', listRouteV2.createList)
  .get('/:name', listRouteV2.retrieveList)
  .put('/:name', listRouteV2.updateList)
  .delete('/:name', listRouteV2.deleteList)
  .get('*', listRouteV2.allLists));

app.use('/v1', v1);
app.use('/v2', v2);
app.use('/', v2); // if no version then use most recent

// browserify js files, cached if NODE_ENV=production
app.get('/app.js', browserify(path.join(pubDir, 'js', 'app.js'), {}));

// add the coverage handler
if (!isCoverageDisabled) {
    //enable coverage endpoints under /coverage
    //var covDir = path.join(__dirname, '../coverage');
    app.use('/coverage', im.createHandler());
}

// could implement server-side parsing for initial page-load
app.get('/*', function(req, res) {
  res.sendFile(path.join(pubDir, 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// Place the express-winston errorLogger after the router.
app.use(log.errorLogger);

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

console.log('RUNNING IN ' + app.get('env') + ' MODE');

/*-- For system restarts/shutdowns we may want to run some cleaup/logging code --*/
process.on('SIGTERM', function() {
  app.close(function() {
    console.log('Closed out remaining connections.');
    // Close db connections, etc.
    process.exit(0);
  });

  setTimeout(function() {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 30 * 1000);
});

module.exports = app;
