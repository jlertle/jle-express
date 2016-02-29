'use strict';

var m = require('mithril');
var e = require('./elements.js');

var Lists = {
  view: function(ctrl, args) {
    if (!args.vm.store.length) {
      return m('p', 'Loading...');
    }
    return e.linkList(args.vm);
  }
};

module.exports = Lists;
