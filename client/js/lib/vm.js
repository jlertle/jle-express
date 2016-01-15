'use strict';

var m = require('mithril');
var tools = require('./tools');

var viewModel = function(model, url) {
  var _this = this;

  _this.init = function() {
    tools.log('vm.init');
    _this.current = new model();

    m.request({method: "GET", url: url, type: model})
    .then(tools.log)
    .then(function(lists) {
        _this.store = lists;
    });
  };

  _this.new = function() {
    tools.log('vm.new');
    _this.current = new model();
  };

  _this.select = function(name) {
    tools.log('vm.select');
    if (!name) {
      return false;
    } else {
      for (var i = _this.store.length; i--;) {
        if (_this.store[i].name === name) {
          _this.current = _this.store[i];
          return true;
        }
      }
    }
  };

  _this.save = function() {
    tools.log('vm.save');
    if (!_this.current.name) {
      return;
    } else if (_this.current.new) {
      tools.log('vm.save new');
      //_this.current._id = Math.random().toString(36).slice(-8);
      m.request({method: "POST", url: url, data: _this.current, type: model})
      .then(tools.log)
      .then(function(list) {
        _this.store.push(list[0]);
        _this.current = new model();
      });
    } else {
      tools.log('vm.save old');
      m.request({method: "PUT", url: url + _this.current.name, data: _this.current, type: model})
      .then(tools.log)
      .then(function(list) {
          _this.current = new model();
      });
    }
  };

  _this.delete = function() {
    tools.log('vm.delete');
    if (!_this.current.name) {
      return;
    } else {
      var name = _this.current.name;
      m.request({method: "DELETE", url: url + _this.current.name})
      .then(tools.log)
      .then(function(response) {
        if (response === 'delete successful') {
          for (var i = _this.store.length; i--;) {
            if (_this.store[i].name === name) {
              _this.store.splice( i, 1 );
              _this.current = new model();
              return true;
            }
          }
        } else {
          alert(response);
        }
      });
    }
  };

};

module.exports = viewModel;
