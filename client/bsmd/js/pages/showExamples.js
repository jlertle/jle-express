'use strict';

var m = require('mithril');

var ExamplesWidget = require('../components/ExamplesWidget.js');

var ShowExamples = {
  view: function() {
    return [
      m.component(ExamplesWidget)
    ];
  }
};

module.exports = ShowExamples;
