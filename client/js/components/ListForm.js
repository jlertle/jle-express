'use strict';

var m = require('mithril');
var e = require('./elements.js');

var ListForm = {
  controller: function() {
    var ctrl = this;
    ctrl.boolean = ['true', 'false'];
  },
  view: function(ctrl, args) {
    var configFunction = function () {
      document.getElementById('name-InputDiv').className += ' is-dirty';
    };
    var title = 'List Edit';
    var icon = 'create';
    var supportingChildren = [
      e.input('Name', args.vm.current, 'name', 'name', 'text', '[autofocus]')
    ];
    var actionChildren = [
      e.button('mdl-button--primary', 'Save', args.vm.save),
      e.button('mdl-button--primary', 'Delete', args.vm.delete),
      e.button('mdl-button--primary', 'New', args.vm.new)
    ];

    return e.cardForm(configFunction, title, icon, supportingChildren, actionChildren);
  }
};

module.exports = ListForm;
