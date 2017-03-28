'use strict';
const computeEachPrice = require('./computeEachPrice');

function computeAllPrice(cartItems) {
  const orderItems = cartItems.map(cartItem => computeEachPrice(cartItem));
  let savePrice = 0, sumPrice = 0;
  orderItems.forEach(orderItem => {
    savePrice += orderItem.savePrice;
    sumPrice += orderItem.sumPrice;
  });
  return {orderItems: orderItems, savePrice: savePrice, sumPrice: sumPrice};
}

module.exports = computeAllPrice;