'use strict';

import m from 'mithril';
import e from './elements.js';

const Lists = {
  view(ctrl, args) {
    if (!args.vm.store.length) {
      return m('p', 'Loading...');
    }
    return e.linkList(args.vm);
  }
};

//export default Lists;
module.exports = Lists;
