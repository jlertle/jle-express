'use strict';

var m = require('mithril');
var e = require('./elements.js');

var ListItems = {
  controller: function() {
    //var ctrl = this;
  },
  view: function(ctrl, args) {
    var headChildren = [
      e.tableHead('Items'),
      e.tableHead('')
    ];
    var bodyChildren = [
      args.vm.current.items.map(function(item, index) {
        return e.tableRow({}, [
          e.tableCell({},
            e.input('', args.vm.current.items, index, index, 'text', '')
          ),
          e.tableCellRight({}, e.buttonIcon('negative', args.vm.deleteItem.bind(args.vm.current, item), 'delete'))
        ]);
      })
    ];
    var footChildren = [
      e.tableHeadRight({
        colspan: 2
      }, [
        e.button('primary', ' Add List Item', args.vm.addItem.bind(args.vm.current))
      ])
    ];

    return e.table(headChildren, bodyChildren, footChildren);
  }
};

module.exports = ListItems;
