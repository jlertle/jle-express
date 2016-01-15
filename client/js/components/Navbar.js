'use strict';

var m = require('mithril');

var Navbar = {
  controller: function() {
    var ctrl = this;

    var links = [{
      label: 'Lists',
      href: '/'
    }].map(function(l) {
      return m('a.mdl-navigation__link' + (m.route() === l.href ? '.is-active' : ''), {
        href: l.href,
        config: m.route
      }, l.label);
    });
    ctrl.links = m.prop(links);
  },

  view: function(ctrl) {
    return m('.mdl-layout__header-row', [
      m('nav.mdl-navigation',
        ctrl.links()
      )
    ]);
  }
};

module.exports = Navbar;
