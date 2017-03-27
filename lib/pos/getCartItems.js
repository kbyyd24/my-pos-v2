'use strict';
let loadAllItems = require('../../spec/pos/fixtures').loadAllItems;

function getCartItems(countedBarcodes) {
  const allItems = loadAllItems();
  let cartItems = [];
  for (const countedBarcode of countedBarcodes) {
    for (const item of allItems) {
      if (item.barcode === countedBarcode.barcode) {
        cartItems.push({
          name: item.name,
          price: item.price,
          unit: item.unit,
          barcode: item.barcode,
          count: countedBarcode.count
        });
      }
    }
  }
  return cartItems;
}

module.exports = getCartItems;