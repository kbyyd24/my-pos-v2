describe('print order', () => {
  const printOrder = require('../../lib/pos/printOrder');
  it('should print ticket in console when given an order', function () {
    const order = {
      orderItems: [{
        price: 3.00,
        count: 5,
        sumPrice: 12.00,
        savePrice: 3.00,
        name: '雪碧',
        unit: '瓶'
      }, {
        price: 15.00,
        count: 1,
        sumPrice: 15.00,
        savePrice: 0,
        name: '荔枝',
        unit: '斤'
      }, {
        price: 4.50,
        count: 2,
        sumPrice: 9.00,
        savePrice: 0,
        name: '泡面',
        unit: '袋'
      }],
      savePrice: 3.00,
      sumPrice: 36.00
    };
    const dateDigitToString = num => (num < 10 ? `0${num}` : num);

    spyOn(console, 'log');

    printOrder(order);

    const currentDate = new Date(),
      year = dateDigitToString(currentDate.getFullYear()),
      month = dateDigitToString(currentDate.getMonth() + 1),
      date = dateDigitToString(currentDate.getDate()),
      hour = dateDigitToString(currentDate.getHours()),
      minute = dateDigitToString(currentDate.getMinutes()),
      second = dateDigitToString(currentDate.getSeconds()),
      formattedDateString = `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;

    const expectText = `***<没钱赚商店>收据***
打印时间：${formattedDateString}
----------------------
名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)
名称：荔枝，数量：1斤，单价：15.00(元)，小计：15.00(元)
名称：泡面，数量：2袋，单价：4.50(元)，小计：9.00(元)
----------------------
总计：36.00(元)
节省：3.00(元)
**********************`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
})