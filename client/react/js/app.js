'use strict';

// var React = require('react');
// var ReactDOM = require('react-dom');

var List = React.createClass({
  render: function() {
    return React.createElement("div", {className: "list"},
      React.createElement("h4", {className: "listName"}, this.props.data.name),
      React.createElement(ListItems, {data: this.props.data})
    );
  }
});

var ListBox = React.createClass({
  loadListsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleListSubmit: function(list) {
    var lists = this.state.data;
    //list.id = Date.now();
    var newLists = lists.concat([list]);
    //console.log('newLists', JSON.stringify(newLists));
    //console.log('list', JSON.stringify(list));
    this.setState({data: newLists});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: list,
      traditional: true,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: lists});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadListsFromServer();
    setInterval(this.loadListsFromServer, this.props.pollInterval);
  },
  render: function() {
    return React.createElement("div", {className: "listBox"},
      React.createElement("h3", {}, 'Lists'),
      React.createElement(Lists, {data: this.state.data}),
      React.createElement(ListForm, {onListSubmit: this.handleListSubmit})
    );
  }
});

var Lists = React.createClass({
  render: function() {
    var listNodes = this.props.data.map(function(list) {
      return React.createElement(List, {data: list, items: list.items, key: list.name});
    });
    return React.createElement("div", {className: "listList"}, listNodes);
  }
});

var ListItems = React.createClass({
  render: function() {
    var itemNodes = this.props.data.items.map(function(item) {
      var itemKey = this.name + '.' + item;
      return React.createElement("li", {key: itemKey}, item);
    }, this.props.data);
    return React.createElement("ul", {className: "listItems"}, itemNodes);
  }
});

var ListForm = React.createClass({
  getInitialState: function() {
    return {name: '', item: '', items: []};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleItemChange: function(e) {
    this.setState({item: e.target.value});
  },
  handleItemBlur: function(e) {
    var item = e.target.value.trim();
    var items = this.state.items;
    if (items.indexOf(item) === -1) {
      items.push(item);
      this.setState({items: items});
      this.setState({item: ''});
    } else {
      this.setState({item: ''});
    }
  },
  handleSubmit: function(e) {
    //console.log('handleSubmit');
    e.preventDefault();
    var name = this.state.name.trim();
    var item = this.state.item.trim();
    var items = this.state.items;

    if (!name || !items) {
      return;
    }
    this.props.onListSubmit({name: name, items: items});
    this.setState({name: '', items: [], item: ''});
  },
  render: function() {
    var nameField = React.createElement("input", {
      type: "text",
      placeholder: "List Name",
      value: this.state.name,
      onChange: this.handleNameChange
    });

    var itemField = React.createElement("input", {
      type: "text",
      placeholder: "Enter Item",
      value: this.state.item,
      onChange: this.handleItemChange,
      onBlur: this.handleItemBlur
    });

    var submitButton = React.createElement("input", {
      type: "submit",
      value: "Post",
      onClick: this.handleSubmit
    });

    var itemsSpan = React.createElement("span", {}, this.state.name + ' : ' + this.state.items.join(', '));

    var breakEl = React.createElement('br');

    var formElements = [nameField, itemField, submitButton, breakEl, itemsSpan];

    return React.createElement("form", {
      className: "listForm"
    }, formElements);
  }
});

var rootElement = React.createElement(ListBox, {url: "/v2/lists", pollInterval:2000});

ReactDOM.render(rootElement, document.getElementById('lists'));
