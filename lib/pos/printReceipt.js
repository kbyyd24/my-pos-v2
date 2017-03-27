'use strict';

const mapTagsToCountedBarcodes = require('./mapTagsToCountedBarcodes');
const getCartItems = require('./getCartItems');
const getCartItemsWithPromotion = require('./getCartItemsWithPromotion');
const computeAllPrice = require('./computeAllPrice');
const printOrder = require('./printOrder');

function printReceipt(tags) {
  const countedBarcodes = mapTagsToCountedBarcodes(tags);
  const cartItems = getCartItems(countedBarcodes);
  const cartItemsWithPromotion = getCartItemsWithPromotion(cartItems);
  const order = computeAllPrice(cartItemsWithPromotion);
  printOrder(order);
}

module.exports = printReceipt;