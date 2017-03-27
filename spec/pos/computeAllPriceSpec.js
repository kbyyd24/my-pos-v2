describe('compute all price', () => {
  const computeAllPrice = require('../../lib/pos/computeAllPrice');
  it('should rentur order without price when given an empty cartItems', () => {
    const expectOrder = {orderItems: [], savePrice: 0, sumPrice: 0};
    const order = computeAllPrice([]);
    expect(order).toEqual(expectOrder);
  });
  it('should return order with savePrice is 0 when given a cartItems without any goods has promotion', () => {
    const cartItems = [
      {price: 3.00, count: 1, promotion: 'BUY_TWO_GET_ONE_FREE'},
      {price: 15.00, count: 1, promotion: ''}
    ];
    const expectOrder = {
      orderItems: [{
        price: 3.00,
        count: 1,
        sumPrice: 3.00,
        savePrice: 0,
        name: undefined,
        unit: undefined
      }, {
        price: 15.00,
        count: 1,
        sumPrice: 15.00,
        savePrice: 0,
        name: undefined,
        unit: undefined
      }],
      savePrice: 0,
      sumPrice: 18.00
    };
    const order = computeAllPrice(cartItems);
    expect(order).toEqual(expectOrder);
  });
  it('should return order with savePrice is not 0 when given a cartItems with any goods has promotion', () => {
    const cartItems = [
      {price: 3.00, count: 5, promotion: 'BUY_TWO_GET_ONE_FREE'},
      {price: 15.00, count: 1, promotion: ''},
      {price: 4.50, count: 2.3, promotion: 'BUY_TWO_GET_ONE_FREE'}
    ];
    const expectOrder = {
      orderItems: [{
        price: 3.00,
        count: 5,
        sumPrice: 12.00,
        savePrice: 3.00,
        name: undefined,
        unit: undefined
      }, {
        price: 15.00,
        count: 1,
        sumPrice: 15.00,
        savePrice: 0,
        name: undefined,
        unit: undefined
      }, {
        price: 4.50,
        count: 2.3,
        sumPrice: 10.35,
        savePrice: 0,
        name: undefined,
        unit: undefined
      }],
      savePrice: 3.00,
      sumPrice: 37.35
    };
    const order = computeAllPrice(cartItems);
    expect(order).toEqual(expectOrder);
  });
});