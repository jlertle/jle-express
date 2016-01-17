'use strict';

var path = require('path');
var fs = require('fs');
var dotenv = require('dotenv');

var envFile = path.join(__dirname, '..', '.env');

if (fs.existsSync(envFile)) {
  dotenv.load();
} else {
  console.error('No .env file found');
}

require('leaked-handles').set({
    fullStack: true, // use full stack traces
    timeout: 5000, // 30000 run every 30 seconds instead of 5.
    debugSockets: true // pretty print tcp thrown exceptions.
});

var tape = require('tape');
var request = require('supertest');
var app = require('../server/app');

var testList = {'name': 'test','items': ['testerosa','testaburger','testala']};
var testList2 = {'name': 'test','items': ['testerosa','testaburger','testalalala']};
var testList3 = {'name': 'test'};

// test('a test test!', function(t) {
//   t.end();
// });

tape('post a list', function(t) {
  request(app)
    .post('/lists')
    .type('json')
    .send(testList)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      var expectedList = [];
      expectedList.push(testList);
      t.error(err, 'No error');
      t.same(res.body, expectedList, 'list posted as expected');
      t.end();
    });
});

tape('lists returned', function(t) {
  request(app)
    .get('/lists')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      t.ok(Array.isArray(res.body), 'array returned, probably lists');
      t.end();
    });
});

tape('correct list returned', function(t) {
  request(app)
    .get('/lists/test')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      var expectedList = testList;
      t.error(err, 'No error');
      t.same(res.body, expectedList, 'list as expected');
      t.end();
    });
});

tape('update a list', function(t) {
  request(app)
    .put('/lists/test')
    .type('json')
    .send(testList2)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      var expectedList = testList2;
      t.error(err, 'No error');
      t.same(res.body, expectedList, 'list updated as expected');
      t.end();
    });
});

tape('updated list returned', function(t) {
  request(app)
    .get('/lists/test')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      var expectedList = testList2;
      t.error(err, 'No error');
      t.same(res.body, expectedList, 'list as expected');
      t.end();
    });
});

tape('delete a list', function(t) {
  request(app)
    .delete('/lists/test')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      t.error(err, 'No error');
      t.same(res.body, 'delete successful', 'delete successful as expected');
      t.end();
    });
});

tape('post a bad list', function(t) {
  request(app)
    .post('/lists')
    .type('json')
    .send(testList3)
    .expect('Content-Type', /json/)
    .expect(422)
    .end(function(err, res) {
      t.error(err, 'No error');
      t.same(res.body, 'Unprocessable Entity', 'list not inserted as expected');
      t.end();
    });
});

tape('delete a bad name', function(t) {
  request(app)
    .delete('/lists/test')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      t.error(err, 'No error');
      t.same(res.body, 'entry not found', 'entry not found as expected');
      t.end();
    });
});

tape('get a bad name', function(t) {
  request(app)
    .get('/lists/test')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      t.error(err, 'No error');
      t.same(res.body, 'entry not found', 'entry not found as expected');
      t.end();
    });
});

tape('SUMMARY', function (t) {
  t.end();
  process.exit(0);
});
