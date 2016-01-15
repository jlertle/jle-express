'use strict';

var caminte = require('caminte');

var config = require('../../config.js');
var db = require('../lib/db');

var Schema = caminte.Schema;
var store = process.env.STORE || 'redis';
var caminteConfig = config.store[store];

var schema = new Schema(caminteConfig.driver, caminteConfig);

var List = schema.define('List', {
  name: {
    type: schema.String,
    'null': false,
    limit: 255,
    index: true
  },
  items: {
    type: schema.JSON,
    default: []
  }
});

// // Uncomment to insert sample data
// List.findOrCreate({
//   name: 'sports'
// }, {
//   items: ['baseball', 'hockey', 'football']
// }, function(err) {
//   if (err) {
//     console.log('List.findOrCreate err', err);
//   } else {
//     console.log('List.create done');
//   }
// });

List.db = new db(List);

module.exports = List;
