'use strict';

import m from 'mithril';
import Navbar from '../components/Navbar.js';
import ListForm from '../components/ListForm.js';
import ListLists from '../components/ListLists.js';
import ListItems from '../components/ListItems.js';
import List from '../models/List.js';

const ListWidget = {
  controller: function update() {
    List.vm.init();
  },
  view() {
    return m('.mdl-layout.mdl-js-layout.mdl-layout--fixed-header.mdl-layout--fixed-drawer', {
    }, [
      m('header.mdl-layout__header', [
        m.component(Navbar)
      ]),
      m('.mdl-layout__drawer', [
        m.component(ListLists, {
          vm: List.vm
        })
      ]),
      m('main.mdl-layout__content', [
        m.component(ListForm, {
          vm: List.vm
        }),
        m.component(ListItems, {
          vm: List.vm
        })
      ])
    ]);
  }
};

//export default ListWidget;
module.exports = ListWidget;
