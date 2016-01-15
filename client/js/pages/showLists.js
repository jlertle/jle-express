'use strict';

var m = require('mithril');

var ListWidget = require('../components/ListWidget.js');

var ShowLists = {
  view: function() {
    return [
      m.component(ListWidget)
    ];
  }
};

module.exports = ShowLists;
