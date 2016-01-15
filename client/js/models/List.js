'use strict';

var ViewModel = require('../lib/vm');

var List = function(data) {
  data = data || {};

  this.name = data.name || '';
  this.items = data.items || [];
  this.new = data.name ? false : true;
};

List.vm = List.vm || new ViewModel(List, '/v2/lists/');

List.vm.addItem = function () {
  List.vm.current.items.push('');
};

List.vm.deleteItem = function (item) {
  List.vm.current.items.splice( List.vm.current.items.indexOf(item), 1 );
};

module.exports = List;
