'use strict';

var m = require('mithril');
var e = require('./elements.js');

var ListItems = {
  controller: function() {
    //var ctrl = this;
  },
  view: function(ctrl, args) {
    return m('table.mdl-data-table.mdl-js-data-table.mdl-shadow--4dp', {
      config: function() {
        componentHandler.upgradeDom();
      }, style: {
        margin: '16px auto',
        width: '50%'
      }
    }, [
      m('thead', [
        m('tr', [
          e.tableHead('Items'),
          e.tableHead('')
        ])
      ]),
      m('tbody', [
        args.vm.current.items.map(function(item, index) {
          return m('tr', [
            e.tableInput(args.vm.current.items, index, index, 'text'),
            e.tableCellRight(e.buttonIcon('negative', args.vm.deleteItem.bind(args.vm.current, item), 'delete'))
          ]);
        })
      ]),
      m('tfoot', [
        m('tr', [
          m('th', {
            colspan: 2
          }, [
            e.button('primary', ' Add List Item', args.vm.addItem.bind(args.vm.current))
          ])
        ])
      ])
    ]);
  }
};

module.exports = ListItems;
