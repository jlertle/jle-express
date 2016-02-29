'use strict';

import m from 'mithril';
import tools from './tools';

/**
 * this is viewModel.
 */
const viewModel = function(model, url) {
  /**
   * @param {object} model this is the model to wrap with viewModel methods.
   * @return {number} this is return.
   */
  const _this = this;

  _this.init = () => {
    tools.log('vm.init');
    _this.current = new model();

    m.request({method: "GET", url, type: model})
    .then(tools.log)
    .then(lists => {
        _this.store = lists;
    });
  };

  _this.new = () => {
    tools.log('vm.new');
    _this.current = new model();
  };

  _this.select = name => {
    tools.log('vm.select');
    if (!name) {
      return false;
    } else {
      for (let i = _this.store.length; i--;) {
        if (_this.store[i].name === name) {
          _this.current = _this.store[i];
          return true;
        }
      }
    }
  };

  _this.save = () => {
    tools.log('vm.save');
    if (!_this.current.name) {
      return;
    } else if (_this.current.new) {
      tools.log('vm.save new');
      //_this.current._id = Math.random().toString(36).slice(-8);
      m.request({method: "POST", url, data: _this.current, type: model})
      .then(tools.log)
      .then(list => {
        _this.store.push(list[0]);
        _this.current = new model();
      });
    } else {
      tools.log('vm.save old');
      m.request({method: "PUT", url: url + _this.current.name, data: _this.current, type: model})
      .then(tools.log)
      .then(list => {
          _this.current = new model();
      });
    }
  };

  _this.delete = () => {
    tools.log('vm.delete');
    if (!_this.current.name) {
      return;
    } else {
      const name = _this.current.name;
      m.request({method: "DELETE", url: url + _this.current.name})
      .then(tools.log)
      .then(response => {
        if (response === 'delete successful') {
          for (let i = _this.store.length; i--;) {
            if (_this.store[i].name === name) {
              _this.store.splice(i, 1);
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

//export default viewModel;
module.exports = viewModel;
