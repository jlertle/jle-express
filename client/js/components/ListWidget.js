'use strict';

var m = require('mithril');

var Navbar = require('../components/Navbar.js');

var ListForm = require('../components/ListForm.js');
var ListLists = require('../components/ListLists.js');
var ListItems = require('../components/ListItems.js');

var List = require('../models/List.js');

var ListWidget = {
  controller: function update() {
    List.vm.init();
  },
  view: function() {
    return m('.mdl-layout.mdl-js-layout.mdl-layout--fixed-header.mdl-layout--fixed-drawer', {
    }, [
      m('header.mdl-layout__header', [
        m.component(Navbar),
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

module.exports = ListWidget;
