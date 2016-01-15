'use strict';

var tools = require('./tools');

var db = function(model) {

  this.list = function() {
    var promise = new Promise(function(resolve, reject) {
      model.all({}, function(err, entries) {
        if (err) {
          tools.log('db.list err:', err);
          reject(err);
        } else {
          //tools.log('db.list entries:', entries);
          entries = entries.map(function(entry) {
            var cleanEntry = {name: entry.name, items: entry.items};
            return cleanEntry;
          });
          resolve(entries);
        }
      });
    });
    return promise;
  };

  //query is an object with names:values to find
  //data is an object with names:values to upsert, will merge with query
  this.upsert = function(query, data) {
    var promise = new Promise(function(resolve, reject) {
      model.updateOrCreate(query, data, function(err, entry) {
        if (err) {
          tools.log('db.upsert err:', err);
          reject(err);
        } else {
          //tools.log('db.upsert entry', entry);
          var cleanEntry = {name: entry.name, items: entry.items};
          resolve(cleanEntry);
        }
      });
    });
    return promise;
  };

  //query is an object with names:values to find
  this.fetch = function(query) {
    var promise = new Promise(function(resolve, reject) {
      model.findOne({where: query}, function(err, entry) {
        if (!entry) {
          //tools.log('db.fetch no entry');
          resolve('entry not found');
        } else if (err) {
          tools.log('db.fetch err:', err);
          reject(err);
        } else {
          //tools.log('db.fetch entry:', entry);
          var cleanEntry = {name: entry.name, items: entry.items};
          resolve(cleanEntry);
        }
      });
    });
    return promise;
  };

  //query is an object with names:values to find
  this.delete = function(query) {
    var promise = new Promise(function(resolve, reject) {
      model.findOne({where: query}, function(err, entry) {
        if (!entry) {
          //tools.log('db.delete fetch no entry');
          resolve('entry not found');
        } else if (err) {
          tools.log('db.delete fetch err:', err);
          reject(err);
        } else {
          //tools.log('db.delete fetch entry:', entry);
          entry.destroy(function(err) {
            if (!err) {
              //tools.log('db.delete success');
              resolve('delete successful');
            } else {
              tools.log('db.delete err:', err);
              reject(err);
            }
          });
        }
      });
    });
    return promise;
  };

  this.clear = function() {
    var promise = new Promise(function(resolve, reject) {
      model.destroyAll(function(err) {
        if (err) {
          tools.log('db.clear err:', err);
          reject(err);
        } else {
          //tools.log('db.clear success');
          resolve('clear successful');
        }
      });
    });
    return promise;
  };
};

module.exports = db;
