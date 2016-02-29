'use strict';

import m from 'mithril';
import Navbar from '../components/Navbar.js';
import circles from '../components/circles.js';

const ShowCircles = {
  view() {
    return m('.mdl-layout.mdl-js-layout.mdl-layout--fixed-header.mdl-layout--fixed-drawer', {
      config(el, isInit) {
        if (!isInit) {
          componentHandler.upgradeDom();
        }
      }
    }, [
      m('header.mdl-layout__header', [
        m.component(Navbar)
      ]),
      m('.mdl-layout__drawer', ''),
      m('main.mdl-layout__content', [
        m.component(circles)
      ])
    ]);
  }
};

//export default ShowCircles;
module.exports = ShowCircles;
