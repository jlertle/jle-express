'use strict';

import ViewModel from '../lib/vm';

const List = function(data={}) {
  this.name = data.name || '';
  this.items = data.items || [];
  this.new = data.name ? false : true;
};

List.vm = List.vm || new ViewModel(List, '/v2/lists/');

List.vm.addItem = () => {
  List.vm.current.items.push('');
};

List.vm.deleteItem = item => {
  List.vm.current.items.splice(List.vm.current.items.indexOf(item), 1);
};

//export default List;
module.exports = List;
