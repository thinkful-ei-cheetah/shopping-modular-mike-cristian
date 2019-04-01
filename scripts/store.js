/* eslint-disable indent */
'use strict';
/* global shoppingList, cuid, $ */

// eslint-disable-next-line no-unused-vars

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = (id) => items.find(item => item.id === id);

  const addItem = function(name) {
    try {
        Item.validateName(name);
    }
    catch(error) {
      return console.log('Cannot add item: ' + error.message);
    }
    const newItem = Item.create(name); 
      this.items.push(newItem);
  };

  const findAndToggleChecked = function(id) {
      const foundItem = this.findById(id);
      foundItem.checked = !foundItem.checked;
  };

  const findAndUpdateName = function(id, newName) {
      try {
        Item.validateName(newName);    
      }
      catch(error) {
        return console.log('Cannot add item: ' + error.message);
      }
      const item = this.findById(id);
        item.name = newName;
  };
  const findAndDelete = function(id) {
      this.items.splice(this.items.findIndex(item => item.id === id), 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(val) {
    this.searchTerm = val;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById, 
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
}() );