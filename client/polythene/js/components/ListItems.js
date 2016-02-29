'use strict';

import m from 'mithril';
import e from './elements.js';

const ListItems = {
  controller() {
    //var ctrl = this;
  },
  view(ctrl, args) {
    const headChildren = [
      e.tableHead('Items'),
      e.tableHead('')
    ];
    const bodyChildren = [
      args.vm.current.items.map((item, index) => e.tableRow({}, [
        e.tableCell({},
          e.input('', args.vm.current.items, index, index, 'text', '')
        ),
        e.tableCellRight({}, e.buttonIcon('negative', args.vm.deleteItem.bind(args.vm.current, item), 'delete'))
      ]))
    ];
    const footChildren = [
      e.tableHeadRight({
        colspan: 2
      }, [
        e.button('primary', ' Add List Item', args.vm.addItem.bind(args.vm.current))
      ])
    ];

    return e.table(headChildren, bodyChildren, footChildren);
  }
};

//export default ListItems;
module.exports = ListItems;
