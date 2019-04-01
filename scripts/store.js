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

  const findById = items.find(id => items.id === id);
  const addItem = function(name) {
    try {
        Item.validateName(name);
        const newItem = Item.create(name); 
        this.items.push(newItem);
    }
    catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  }
  const findAndToggleChecked = function(id) {
      const foundItem = this.findById(id);
      foundItem.checked = !foundItem.checked;
  }
  const findAndUpdateName = function(id, newName) {
      try {
          Item.validateName(newName);
          const item = findById(id);
          item.name = newName;
      }
      catch(error) {
        console.log('Cannot add item: ' + error.message);
      }
  }
  const findAndDelete = function(id) {
      this.items.splice(this.items.findIndex(item => item.id === id), 1);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById, 
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
}() );