'use strict';

var tools = require('./tools');

/**
 * Wraps a Caminte model with Promises for db calls
 * @class db
 * @param {Object} model - the model to extend with db Promises
 * @return db
 */
var db = function(model) {

  /**
   * Grab all Lists
   * @method list
   * @alias db.list
   * @memberof! db
   * @return promise
   */
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

  /**
   * Description
   * @method upsert
   * @param {Object} query - query is an object with names:values to find
   * @param {string} query.name - The name of a list.
   * @param {Object} data - data is an object with items:values to upsert, will merge with query
   * @alias db.upsert
   * @memberof! db
   * @return promise
   */
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
  /**
   * Description
   * @method fetch
   * @param {} query
   * @alias db.fetch
   * @memberof! db
   * @return promise
   */
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
  /**
   * Description
   * @method delete
   * @param {} query
   * @alias db.delete
   * @memberof! db
   * @return promise
   */
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

  /**
   * Description
   * @method clear
   * @alias db.clear
   * @memberof! db
   * @return promise
   */
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
