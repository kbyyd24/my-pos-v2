'use strict';
let loadPromotions = require('../../spec/pos/fixtures').loadPromotions;

function getCartItemsWithPromotion(cartItems) {
  const promotions = loadPromotions();
  let cartItemsWithPromotion = [];
  for (let cartItem of cartItems) {
    promotions.forEach(promotion => {
      let promotionType = '';
      if (promotion.barcodes.indexOf(cartItem.barcode) !== -1) {
        promotionType = promotion.type;
      }
      cartItemsWithPromotion.push({
        name: cartItem.name,
        price: cartItem.price,
        unit: cartItem.unit,
        count: cartItem.count,
        promotion: promotionType
      });
    });
  }
  return cartItemsWithPromotion;
}

module.exports = getCartItemsWithPromotion;