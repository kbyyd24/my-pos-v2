describe('compute each item price', () => {
  let computeEachPrice = require('../../lib/pos/computeEachPrice');
  it('should return origin price when given a item without promotion', () => {
    const cartItem = {name: '荔枝', price: 15.00, unit: '斤', count: 1, promotion: ''};
    const expectOrderItem = {name: '荔枝', price: 15.00, unit: '斤', count: 1, sumPrice: 15.00, savePrice: 0};
    const orderItem = computeEachPrice(cartItem);
    expect(orderItem.sumPrice).toEqual(expectOrderItem.sumPrice);
    expect(orderItem.savePrice).toEqual(expectOrderItem.savePrice);
  });
  it('should return origin price when given a item with promotion but not enable', () => {
    const cartItem = {name: '方便面', price: 4.50, unit: '袋', count: 1, promotion: 'BUY_TWO_GET_ONE_FREE'};
    const expectOrderItem = {name: '方便面', price: 4.50, unit: '袋', count: 1, sumPrice: 4.50, savePrice: 0};
    const orderItem = computeEachPrice(cartItem);
    expect(orderItem.sumPrice).toEqual(expectOrderItem.sumPrice);
    expect(orderItem.savePrice).toEqual(expectOrderItem.savePrice);
  });
  it('should return promot price when given a item with promotion and enable', () => {
    const cartItem = {name: '雪碧', price: 3.00, unit: '瓶', count: 5, promotion: 'BUY_TWO_GET_ONE_FREE'};
    const expectOrderItem = {name: '雪碧', price: 3.00, unit: '瓶', count: 5, sumPrice: 12.00, savePrice: 3.00};
    const orderItem = computeEachPrice(cartItem);
    expect(orderItem.sumPrice).toEqual(expectOrderItem.sumPrice);
    expect(orderItem.savePrice).toEqual(expectOrderItem.savePrice);
  })
});