var expressWinston = require('express-winston');
var winston = require('winston');
require('winston-loggly');

//to continue after an exception is caught set exitOnError to false.
winston.exitOnError = true;
//
// winston.add(winston.transports.Loggly, {
//   token: process.env.LOGGLY_TOKEN,
//   subdomain: process.env.LOGGLY_SUBDOMAIN,
//   tags: ["Winston-NodeJS"],
//   json: true
// });

// ? local file useful if network is lost ?
winston.handleExceptions(new winston.transports.File({
  filename: 'path/to/uncaughtExceptions.log'
}));

//winston.log('info', "Hello World from Node.js!");

/*
Winston log levels

silly
verbose
info
http
warn
error
silent
*/

var transportConsole = new winston.transports.Console({
  json: true,
  colorize: true,
  level: 'silly',
  prettyPrint: true,
  timestamp: true
});
var transportLoggly = new winston.transports.Loggly({
  token: process.env.LOGGLY_TOKEN,
  subdomain: process.env.LOGGLY_SUBDOMAIN,
  json: true,
  tags: ["NodeJS"],
  level: 'silly',
  prettyPrint: true,
  timestamp: true
});

var transports = [transportConsole];

if (process.env.NODE_ENV === 'production') {
  transports.push(transportLoggly);
}

exports.logger = expressWinston.logger({
  transports: transports
});

exports.errorLogger = expressWinston.errorLogger({
  transports: transports
});
