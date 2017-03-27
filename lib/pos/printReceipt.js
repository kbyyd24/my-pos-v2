'use strict';

const parseBarcodes = require('./parseBarcodes');
const countBarcodes = require('./countBarcodes');
const getCartItems = require('./getCartItems');
const getCartItemsWithPromotion = require('./getCartItemsWithPromotion');
const computeAllPrice = require('./computeAllPrice');
const printOrder = require('./printOrder');

function printReceipt(tags) {
  const uncountedBarcodes = parseBarcodes(tags);
  const countedBarcodes = countBarcodes(uncountedBarcodes);
  const cartItems = getCartItems(countedBarcodes);
  const cartItemsWithPromotion = getCartItemsWithPromotion(cartItems);
  const order = computeAllPrice(cartItemsWithPromotion);
  printOrder(order);
}

module.exports = printReceipt;