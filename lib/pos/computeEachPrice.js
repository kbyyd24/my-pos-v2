'use strict';

function computeEachPrice(cartItem) {
  let sumPrice, savePrice = 0;
  if (cartItem.promotion === BUY_TWO_GET_ONE_FREE && cartItem.count >= 3) {
    sumPrice = cartItem.price * (cartItem.count - 1);
    savePrice = cartItem.price;
  } else {
    sumPrice = cartItem.price * cartItem.count;
  }
  return {
    name: cartItem.name,
    price: cartItem.price,
    count: cartItem.count,
    unit: cartItem.unit,
    sumPrice: sumPrice,
    savePrice: savePrice
  };
}

const BUY_TWO_GET_ONE_FREE = 'BUY_TWO_GET_ONE_FREE';

module.exports = computeEachPrice;