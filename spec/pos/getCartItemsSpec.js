describe('get cart items', () => {
  let getCartItems = require('../../lib/pos/getCartItems');
  it('should return empty array when given empty countedBarcodes array', () => {
    let cartItems = getCartItems([]);
    expect(cartItems).toEqual([]);
  });
  it('should return items info when given countedBarcodes', () => {
    let countedBarcodes = [
      {barcode: 'ITEM00001', count: 5},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ];
    let expectCartItems = [
      {name: '雪碧', price: 3.00, unit: '瓶', barcode: 'ITEM000001', count: 5},
      {name: '荔枝', price: 15.00, unit: '斤', barcode: 'ITEM000003', count: 1},
      {name: '方便面', price: 4.50, unit: '袋', barcode: 'ITEM000005', count: 1}
    ];
    let cartItems = getCartItems(countedBarcodes);
    for (let i = 0; i < cartItems.length; i ++) {
      expect(cartItems[i].barcode).toEqual(expectCartItems[i].barcode);
      expect(cartItems[i].name).toEqual(expectCartItems[i].name);
      expect(cartItems[i].price).toEqual(expectCartItems[i].price);
      expect(cartItems[i].unit).toEqual(expectCartItems[i].unit);
      expect(cartItems[i].count).toEqual(expectCartItems[i].count);
    }
  });
});