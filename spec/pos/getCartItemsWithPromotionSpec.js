describe('get cart items this promotion info', () => {
  let getCartItemsWithPromotion = require('../../lib/pos/getCartItemsWithPromotion');
  it('should return cartItemsWithPromotion when given a CartItems array', () => {
    const cartItems = [
      {name: '雪碧', price: 3.00, unit: '瓶', barcode: 'ITEM000001', count: 5},
      {name: '荔枝', price: 15.00, unit: '斤', barcode: 'ITEM000003', count: 1},
      {name: '方便面', price: 4.50, unit: '袋', barcode: 'ITEM000005', count: 1}
    ];
    const expectCartItemsWithPromotion = [
      {name: '雪碧', price: 3.00, unit: '瓶', count: 5, promotion: 'BUY_TWO_GET_ONE_FREE'},
      {name: '荔枝', price: 15.00, unit: '斤', count: 1, promotion: ''},
      {name: '方便面', price: 4.50, unit: '袋', count: 1, promotion: 'BUY_TWO_GET_ONE_FREE'}
    ];
    const cartItemsWithPromotion = getCartItemsWithPromotion(cartItems);
    for (let i = 0; i < cartItemsWithPromotion.length; i++) {
      expect(cartItemsWithPromotion[i].promotion).toEqual(expectCartItemsWithPromotion[i].promotion);
    }
  });
});