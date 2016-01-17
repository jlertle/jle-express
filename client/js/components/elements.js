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

exports.input = function(label, obj, prop, id, type, attr) {
  return m('#' + id + '-InputDiv.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label', [
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

exports.table = function (headChild, bodyChild, footChild) {
  return m('table.mdl-data-table.mdl-js-data-table.mdl-shadow--4dp', {
    config: function() {
      componentHandler.upgradeDom();
    }, style: {
      margin: '16px auto',
      width: '50%'
    }
  }, [
    m('thead', [
      m('tr', headChild)
    ]),
    m('tbody', bodyChild),
    m('tfoot', [
      m('tr', footChild)
    ])
  ]);
};


exports.tableRow = function(prop, child) {
  return m('tr', prop, child);
};

exports.tableHead = function(prop, child) {
  return m('th.mdl-data-table__cell--non-numeric', prop, child);
};

exports.tableHeadRight = function(prop, child) {
  return m('th.mdl-data-table__cell', prop, child);
};

exports.tableCell = function(prop, child) {
  return m('td.mdl-data-table__cell--non-numeric', prop, child);
};

exports.tableCellRight = function(prop, child) {
  return m('td.mdl-data-table__cell', prop);
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

exports.select = function (options, elParent, elID, labelText, value) {
  /*
  var optionsA = ["a", "b", "c", "d"];
  makeDropDown(optionsA, 'insert-here', 'ddl1', 'Name', '');
  var optionsB = ["e", "f", "g", "h"];
  makeDropDown(optionsB, 'insert-here', 'ddl2', '', '');
  */

  // create the DIV wrapper
  var ddl = document.createElement('DIV');
  ddl.id = elID + 'InputDiv'; // this is how Material Design associates option/button
  ddl.setAttribute('class', 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label');

  //if (labelText) {
    var label = document.createElement('LABEL');
    label.setAttribute('class', 'mdl-textfield__label');
    label.setAttribute('for', elID); // associate button
    label.innerHTML = labelText;
    ddl.appendChild(label);
	//}

  var input = document.createElement('INPUT');
  input.setAttribute('class', 'mdl-textfield__input');
  input.value = value;
  input.id = elID; // this is how Material Design associates option/button
	ddl.appendChild(input);

  document.getElementById(elParent).appendChild(ddl);

  // add the options to the input (unordered list)
  var ul = document.createElement('UL');
  ul.setAttribute('class', 'mdl-menu mdl-js-menu mdl-js-ripple-effect');
  ul.setAttribute('for', elID + 'InputDiv'); // associate wrapper div
  for (var index in options) {
    // add each item to the list
    var li = document.createElement('LI');
    li.setAttribute('class', 'mdl-menu__item');
    li.innerHTML = options[index];
    li.ddl = ddl;
    li.input = input;
    li.onclick = function() {
      this.input.value = this.innerText || this.textContent;
      this.ddl.className += ' is-dirty';
    };
    ul.appendChild(li);
  }
  // and finally add the list to the HTML
  document.getElementById(elParent).appendChild(ul);
};

exports.cardForm = function (configFunction, title, icon, supportingChild, actionChild) {
  return m('.mdl-card.mdl-shadow--4dp', {
    config: function(el, isInit) {
      if (!isInit) {
        componentHandler.upgradeDom();
      }
      configFunction();
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
          m('h2.mdl-card__title-text', title),
          m('.mdl-layout-spacer'),
          m('i.material-icons', icon),
        ]),
      m('.mdl-card__supporting-text', [
        supportingChild
      ]),
      m('.mdl-card__actions.mdl-card--border', {
        style: {
          display: 'flex',
          'box-sizing': 'border-box',
          'align-items': 'center'
        }
      }, [
        m('.mdl-layout-spacer'),
        actionChild,
        m('.mdl-layout-spacer')
      ])
    ])
  ]);
};
