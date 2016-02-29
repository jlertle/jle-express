'use strict';

import m from 'mithril';

m.setValue = (obj, prop) => m.withAttr('value', value => {
  obj[prop] = value;
});

m.toggleValue = (obj, prop) => m.withAttr('value', () => {
  obj[prop] = !obj[prop];
});

m.set = (obj, prop, value) => () => {
  obj[prop] = value;
};

exports.button = (styles, label, action) => {
  const addStyles = !styles ? '' : `.${styles}`;
  return m(`button.mdl-button.mdl-button--primary.mdl-js-button.mdl-js-ripple-effect${addStyles}`, {
    onclick(e) {
      e.preventDefault();
      action();
    }
  }, label);
};

exports.buttonIcon = (styles, action, icon) => {
  const addStyles = !styles ? '' : `.${styles}`;
  return m(`button.mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect${addStyles}`, {
    onclick(e) {
      e.preventDefault();
      action(e);
    }
  }, [
    m('i.material-icons', icon)
  ]);
};

exports.buttonPlain = (label, action) => m('button', {
  onclick(e) {
    e.preventDefault();
    action();
  }
}, label);

exports.input = (label, obj, prop, id, type, attr) => m(`#${id}-InputDiv.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label`, [
  m('label.mdl-textfield__label', {
    for: id
  }, label),
  m(`input.mdl-textfield__input${attr}`, {
    autocomplete: 'off',
    id,
    name: id,
    type,
    value: obj[prop],
    onchange: m.setValue(obj, prop)
  })
]);

exports.table = (headChild, bodyChild, footChild) => m('table.mdl-data-table.mdl-js-data-table.mdl-shadow--4dp', {
  config() {
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

exports.tableRow = (prop, child) => m('tr', prop, child);

exports.tableHead = (prop, child) => m('th.mdl-data-table__cell--non-numeric', prop, child);

exports.tableHeadRight = (prop, child) => m('th.mdl-data-table__cell', prop, child);

exports.tableCell = (prop, child) => m('td.mdl-data-table__cell--non-numeric', prop, child);

exports.tableCellRight = (prop, child) => m('td.mdl-data-table__cell', prop, child);

exports.linkList = vm => m('nav.mdl-navigation',
  vm.store.map((item, index) => m('a.mdl-navigation__link', {
    index,
    onclick: vm.select.bind(null, item.name)
  }, item.name))
);

exports.checkbox = (label, obj, prop) => {
  const checkboxConfig = {
    type: 'checkbox',
    onchange: m.toggleValue(obj, prop)
      // class: 'hiddenInput'
  };

  if (obj[prop]) {
    checkboxConfig.checked = prop;
  }

  return m('.field', [
    m('label', label),
    m('.ui.toggle.checkbox', [
      m('input', checkboxConfig),
      m('label', '')
    ])
  ]);
};

exports.select = (options, elParent, elID, labelText, value) => {
  /*
  var optionsA = ["a", "b", "c", "d"];
  makeDropDown(optionsA, 'insert-here', 'ddl1', 'Name', '');
  var optionsB = ["e", "f", "g", "h"];
  makeDropDown(optionsB, 'insert-here', 'ddl2', '', '');
  */

  // create the DIV wrapper
  const ddl = document.createElement('DIV');
  ddl.id = `${elID}InputDiv`; // this is how Material Design associates option/button
  ddl.setAttribute('class', 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label');

  //if (labelText) {
  const label = document.createElement('LABEL');
  label.setAttribute('class', 'mdl-textfield__label');
  label.setAttribute('for', elID); // associate button
  label.innerHTML = labelText;
  ddl.appendChild(label);
  //}

  const input = document.createElement('INPUT');
  input.setAttribute('class', 'mdl-textfield__input');
  input.value = value;
  input.id = elID; // this is how Material Design associates option/button
  ddl.appendChild(input);

  document.getElementById(elParent).appendChild(ddl);

  // add the options to the input (unordered list)
  const ul = document.createElement('UL');
  ul.setAttribute('class', 'mdl-menu mdl-js-menu mdl-js-ripple-effect');
  ul.setAttribute('for', `${elID}InputDiv`); // associate wrapper div
  for (let index in options) {
    // add each item to the list
    const li = document.createElement('LI');
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

exports.cardForm = (configFunction, title, icon, supportingChild, actionChild) => m('.mdl-card.mdl-shadow--4dp', {
  config(el, isInit) {
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

exports.linkListDragDrop = (elSelector, vm) => m('.drag', {
    config(el, isInited) {
      if (isInited) {
        return;
      }
      const listEl = el.querySelector(elSelector); //,
      //instAssign = el.querySelector('.instAssign');
      //console.log('listEl', listEl);
      //var drake = dragula([listEl, instAssign]);

      const drake = dragula([listEl]);
      //console.log(drake);
      drake.on('drop', (element, target, source) => {
        const fromIndex = element.getAttribute('index');
        //var t = target.className;

        //console.log('element', element);
        //console.log('target', target);
        //console.log('source', source);

        function findIndex(node) {
          let i = 1;
          while (node = node.previousSibling) {
            if (node.nodeType === 1) {
              ++i;
            }
          }
          return i - 1;
        }
        const toIndex = findIndex(element);

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
  m(`nav.mdl-navigation.${elSelector}`,
    vm.store.map((item, index) => {
      //console.log('item', item);
      //console.log('index', index);
      const itemID = (typeof item._id === 'function') ? item._id() : item._id;
      const itemName = (typeof item.name === 'function') ? item.name() : item.name;
      //console.log(itemID, itemName);
      return m('a.mdl-navigation__link', {
        index,
        onclick: vm.select.bind(null, itemID)
      }, itemName);
    })
  )
);
