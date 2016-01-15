'use strict';

var m = require('mithril');
var e = require('./elements.js');

var ListForm = {
  controller: function() {
    var ctrl = this;
    ctrl.boolean = ['true', 'false'];
  },
  view: function(ctrl, args) {
    return m('.mdl-card.mdl-shadow--4dp', {
      config: function(el, isInit) {
        if (!isInit) {
          componentHandler.upgradeDom();
        }
        document.getElementById('nameInputDiv').className += ' is-dirty';
      },
      style: {
        margin: '16px auto',
        width: '50%'
      }
    }, [
      m('form', [
        m('.mdl-card__title', {
            style: {
              color: '#fff',
              background: 'rgba(0, 0, 0, 0.2)'
            }
          }, [
            m('h2.mdl-card__title-text', 'List Edit'),
            m('.mdl-layout-spacer'),
            m('i.material-icons', 'create'),
          ]),
        m('.mdl-card__supporting-text', [
          e.fieldInput('Name', args.vm.current, 'name', 'name', 'text', '[autofocus]')
        ]),
        m('.mdl-card__actions.mdl-card--border', {
          style: {
            display: 'flex',
            'box-sizing': 'border-box',
            'align-items': 'center'
          }
        }, [
          m('.mdl-layout-spacer'),
          e.button('mdl-button--primary', 'Save', args.vm.save),
          e.button('mdl-button--primary', 'Delete', args.vm.delete),
          e.button('mdl-button--primary', 'New', args.vm.new),
          m('.mdl-layout-spacer')
        ])
      ])
    ]);
  }
};

module.exports = ListForm;
