'use strict';

var m = require('mithril');

var Navbar = require('../components/Navbar.js');
var circles = require('../components/circles.js');

var ShowCircles = {
  view: function() {
    return m('.mdl-layout.mdl-js-layout.mdl-layout--fixed-header.mdl-layout--fixed-drawer', {
      config: function(el, isInit) {
        if (!isInit) {
          componentHandler.upgradeDom();
        }
      }
    }, [
      m('header.mdl-layout__header', [
        m.component(Navbar),
      ]),
      m('.mdl-layout__drawer', ''),
      m('main.mdl-layout__content', [
        m.component(circles)
      ])
    ]);
  }
};

module.exports = ShowCircles;
