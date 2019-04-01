'use strict';
/* global shoppingList, cuid, $ */

// eslint-disable-next-line no-unused-vars
// const store = {

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

