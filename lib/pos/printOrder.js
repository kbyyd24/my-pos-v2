'use strict';

function printOrder(order) {
  let ticketFormat = `***<没钱赚商店>收据***\n`
  ticketFormat += `打印时间：` +formatDate() + `\n----------------------\n`;
  order.orderItems.forEach(item => {
    ticketFormat += `名称：${item.name}，数量：${item.count}${item.unit}，单价：${item.price.toFixed(2)}(元)，小计：${item.sumPrice.toFixed(2)}(元)\n`;
  });
  ticketFormat += `----------------------
总计：${order.sumPrice.toFixed(2)}(元)
节省：${order.savePrice.toFixed(2)}(元)
**********************`;
  console.log(ticketFormat);
}

function formatDate() {
  const dateDigitToString = num => (num < 10 ? `0${num}` : num);
  const now = new Date(),
  year = dateDigitToString(now.getFullYear()),
    month = dateDigitToString(now.getMonth() + 1),
    date = dateDigitToString(now.getDate()),
    hour = dateDigitToString(now.getHours()),
    minute = dateDigitToString(now.getMinutes()),
    second = dateDigitToString(now.getSeconds()),
    formattedDateString = `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;
  return formattedDateString;
}

module.exports = printOrder;