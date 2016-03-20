'use strict';

var m = require('mithril');
var e = require('./elements');

m.setValue = function(obj, prop) {
  // onchange: m.setValue(obj, 'property')
  return m.withAttr('value', function(value) {
    obj[prop] = value;
  });
};

m.setToInnerText = function(obj, prop) {
  // onchange: m.setValue(obj, 'property')
  return m.withAttr('value', function(value) {
    obj[prop] = value;
  });
};

m.toggleValue = function(obj, prop) {
  // onchange: m.toggleValue(obj, 'property')
  return m.withAttr('value', function() {
    obj[prop] = !obj[prop];
    //console.log('toggle: obj[prop]', obj[prop]);
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
    m('i.material-icons', icon)
  ]);
};

exports.buttonPlain = function(label, action) {
  return m('button', {
    onclick: function(e) {
      e.preventDefault();
      action();
    }
  }, label);
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
    })
  ]);
};

exports.table = function(headChild, bodyChild, footChild) {
  return m('table.mdl-data-table.mdl-js-data-table.mdl-shadow--4dp', {
    config: function() {
      componentHandler.upgradeDom();
    },
    style: {
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
  return m('td.mdl-data-table__cell', prop, child);
};

exports.linkList = function(vm) {
  //console.log('vm', vm);
  return m('nav.mdl-navigation',
    vm.store.map(function(item, index) {
      return m('a.mdl-navigation__link', {
        index: index,
        onclick: vm.select.bind(null, item._id)
      }, item.name);
    })
  );
};

exports.checkbox = function(label, obj, prop, id) {
  var styles = '';
  var checkboxConfig = {
    id: id,
    type: 'checkbox',
    //onchange: m.toggleValue(obj, prop),
    onchange: function() {
      m.toggleValue(obj, prop);
      var domEl = document.getElementById(id);
      // http://stackoverflow.com/questions/31413042/toggle-material-design-lite-checkbox
      // http://quaintous.com/2015/07/09/react-components-with-mdl/
      // http://stackoverflow.com/questions/31413042/toggle-material-design-lite-checkbox/31419856#31419856
      var mdlComp = new MaterialCheckbox(domEl);
      mdlComp.uncheck();

      if (!obj[prop]) {
        mdlComp.uncheck();
        //checkboxConfig.checked = prop;
        //styles = '.is-upgraded.is-checked';
      } else {
        mdlComp.check();
      }
    }
  };

  if (obj[prop]) {
    checkboxConfig.checked = prop;
    styles = '.is-upgraded.is-checked';
  }

  return m('label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect', {
    for: id
  }, [
    m('input.mdl-checkbox__input', checkboxConfig),
    m('span.mdl-checkbox__label', label)
  ]);
};

exports.selectOLD = function(label, obj, prop, options, id) {
  return m('.mdl-selectfield.mdl-js-selectfield.mdl-selectfield--floating-label', [
    m('select.mdl-selectfield__select', {
      id: id,
      name: id,
      value: obj[prop],
      onchange: m.setValue(obj, prop)
    }, [
      options.map(function(opt) {
        return m('option', {
          value: opt
        }, opt);
      })
    ]),
    m('label.mdl-selectfield__label', {
      for: id
    }, label),
  ]);
};

exports.select = function(label, obj, prop, options, id) {
  return m('.mdl-selectfield.mdl-js-selectfield.mdl-selectfield--floating-label', [
    m('select.mdl-selectfield__select', {
      id: id,
      name: id,
      value: obj[prop],
      onchange: m.setValue(obj, prop)
    }, [
      options.map(function(opt) {
        return m('option', {
          value: opt
        }, opt);
      })
    ]),
    m('label.mdl-selectfield__label', {
      for: id
    }, label),
  ]);
};

exports.selectDDL = function(label, obj, prop, options, elID, value) {
  // e.select('Port', cur, 'midi_port', ctrl.ports, 'port'),
  // e.select('Chan', cur, 'midi_chan', ctrl.channels, 'channel'),
  /*
  var optionsA = ["a", "b", "c", "d"];
  makeDropDown(optionsA, 'insert-here', 'ddl1', 'Name', '');
  var optionsB = ["e", "f", "g", "h"];
  makeDropDown(optionsB, 'insert-here', 'ddl2', '', '');
  */

  // create parent DIV
  var elParent = document.createElement('DIV');

  // create the DIV wrapper
  var ddl = document.createElement('DIV');
  ddl.id = elID + '-InputDiv'; // this is how Material Design associates option/button
  ddl.setAttribute('class', 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label');

  //if (label) {
  var labelEl = document.createElement('LABEL');
  labelEl.setAttribute('class', 'mdl-textfield__label');
  labelEl.setAttribute('for', elID); // associate button
  labelEl.innerHTML = label;
  ddl.appendChild(labelEl);
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
  ul.setAttribute('for', elID + '-InputDiv'); // associate wrapper div
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
  return elParent;
};

exports.menu = function(label, obj, prop, parentID, options) {
  // var menuClick = function(parentID) {
  //   console.log('this', this);
  //   console.log(arguments);
  //   console.log('parentID', parentID);
  //   var divID = parentID + '-InputDiv';
  //   var inputID = parentID;
  //   document.getElementById(inputID).value = this.innerText || this.textContent;
  //   document.getElementById(divID).className += ' is-dirty';
  // };

  return m('ul.mdl-menu.mdl-js-menu.mdl-js-ripple-effect', {
    for: parentID + '-InputDiv'
  }, [
    options.map(function(opt) {
      return m('li.mdl-menu__item', {
        value: opt,
        onclick: function() {
          obj[prop] = this.value;
        }
      }, opt);
    })
  ]);
};

exports.cardForm = function(configFunction, title, icon, supportingChild, actionChild) {
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
        m('i.material-icons', icon)
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

exports.linkListDragDrop = function(elSelector, vm) {

  return m('.drag', {
      config: function(el, isInited) {
        if (isInited) {
          return;
        }
        var listEl = el.querySelector(elSelector); //,
        //instAssign = el.querySelector('.instAssign');
        //console.log('listEl', listEl);
        //var drake = dragula([listEl, instAssign]);

        var drake = dragula([listEl]);
        //console.log(drake);
        drake.on('drop', function(element, target, source) {
          var fromIndex = element.getAttribute('index');
          //var t = target.className;

          //console.log('element', element);
          //console.log('target', target);
          //console.log('source', source);

          function findIndex(node) {
            var i = 1;
            while (node = node.previousSibling) {
              if (node.nodeType === 1) {
                ++i;
              }
            }
            return i - 1;
          }
          var toIndex = findIndex(element);

          console.log('fromIndex', fromIndex);
          console.log('toIndex', toIndex);
          vm.move(fromIndex, toIndex);

          // if (t === 'listEl') {
          //   // keep in mind. this is not ready.
          //   scope.left.push(scope.right[i]);
          //   scope.right.splice(i, 1);
          // } else {
          //   // keep in mind. this is not ready.
          //   scope.right.push(scope.left[i]);
          //   scope.left.splice(i, 1);
          // }
          //
          // console.log(scope.left, scope.right);
        });

      }
    },
    m('nav.mdl-navigation.' + elSelector,
      vm.store.map(function(item, index) {
        //console.log('item', item);
        //console.log('index', index);
        var itemID = (typeof item._id === 'function') ? item._id() : item._id;
        var itemName = (typeof item.name === 'function') ? item.name() : item.name;
        //console.log(itemID, itemName);
        return m('a.mdl-navigation__link', {
          index: index,
          onclick: vm.select.bind(null, itemID)
        }, itemName);
      })
    )
  );
};
