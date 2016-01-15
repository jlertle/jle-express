'use strict';

var m = require('mithril');

m.setValue = function(obj, prop) {
  // onchange: m.setValue(obj, 'property')
  return m.withAttr('value', function(value) {
    obj[prop] = value;
  });
};

m.toggleValue = function(obj, prop) {
  // onchange: m.toggleValue(obj, 'property')
  return m.withAttr('value', function() {
    obj[prop] = !obj[prop];
  });
};

m.set = function(obj, prop, value) {
  // onclick: m.set(ctrl, 'tab', 'first')
  // not necessary if you're using ES6: onclick: () => ctrl.tab = 'first')
  return function() {
    obj[prop] = value;
  };
};

exports.button = function(styles, label, action) {
  var addStyles = !styles ? '' : '.' + styles;
  return m('button.mdl-button.mdl-button--primary.mdl-js-button.mdl-js-ripple-effect' + addStyles, {
    onclick: function(e) {
      e.preventDefault();
      action();
    }
  }, label);
};

exports.buttonIcon = function(styles, action, icon) {
  var addStyles = !styles ? '' : '.' + styles;
  return m('button.mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect' + addStyles, {
    onclick: function(e) {
      e.preventDefault();
      action(e);
    }
  }, [
    m('i.material-icons', icon),
  ]);
};

exports.fieldInput = function(label, obj, prop, id, type, attr) {
  return m('#' + id + 'InputDiv.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label', [
    m('label.mdl-textfield__label', {
      for: id
    }, label),
    m('input.mdl-textfield__input' + attr, {
      autocomplete: 'off',
      id: id,
      name: id,
      type: type,
      value: obj[prop],
      onchange: m.setValue(obj, prop)
    }),
  ]);
};

exports.tableHead = function(prop) {
  return m('th.mdl-data-table__cell--non-numeric', prop);
};

exports.tableCell = function(prop) {
  return m('td.mdl-data-table__cell--non-numeric', prop);
};

exports.tableCellRight = function(prop) {
  return m('td.mdl-data-table__cell', prop);
};

exports.tableInput = function(obj, prop, id, type) {
  return m('td.mdl-data-table__cell--non-numeric', [
    m('.mdl-textfield.mdl-js-textfield', [
      m('label.mdl-textfield__label', {
        for: id
      }, ''),
      m('input.mdl-textfield__input', {
        autocomplete: 'off',
        id: id,
        name: id,
        type: type,
        value: obj[prop],
        onchange: m.setValue(obj, prop)
      }),
    ])
  ]);
};

exports.linkList = function(vm) {
  return m('nav.mdl-navigation',
    vm.store.map(function(item, index) {
      return m('a.mdl-navigation__link', {
        index: index,
        onclick: vm.select.bind(null, item.name)
      }, item.name);
    })
  );
};
