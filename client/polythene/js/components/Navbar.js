'use strict';

import m from 'mithril';

const Navbar = {
  controller() {
    const ctrl = this;

    const links = [{
      label: 'Lists',
      href: '/'
    }].map(l => m(`a.mdl-navigation__link${m.route() === l.href ? '.is-active' : ''}`, {
      href: l.href,
      config: m.route
    }, l.label));
    ctrl.links = m.prop(links);
  },

  view(ctrl) {
    return m('.mdl-layout__header-row', [
      m('nav.mdl-navigation',
        ctrl.links()
      )
    ]);
  }
};

//export default Navbar;
module.exports = Navbar;
