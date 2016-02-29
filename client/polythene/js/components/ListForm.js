'use strict';

import m from 'mithril';
import e from './elements.js';

const ListForm = {
  controller() {
    const ctrl = this;
    ctrl.boolean = ['true', 'false'];
  },
  view(ctrl, args) {
    const configFunction = () => {
      document.getElementById('name-InputDiv').className += ' is-dirty';
    };
    const title = 'List Edit';
    const icon = 'create';
    const supportingChildren = [
      e.input('Name', args.vm.current, 'name', 'name', 'text', '[autofocus]')
    ];
    const actionChildren = [
      e.button('mdl-button--primary', 'Save', args.vm.save),
      e.button('mdl-button--primary', 'Delete', args.vm.delete),
      e.button('mdl-button--primary', 'New', args.vm.new)
    ];

    return e.cardForm(configFunction, title, icon, supportingChildren, actionChildren);
  }
};

//export default ListForm;
module.exports = ListForm;
