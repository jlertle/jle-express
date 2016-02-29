'use strict';

import m from 'mithril';
import ListWidget from '../components/ListWidget.js';

const ShowLists = {
  view() {
    return [
      m.component(ListWidget)
    ];
  }
};

//export default ShowLists;
module.exports = ShowLists;
