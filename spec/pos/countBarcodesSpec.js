describe('count barcodes', () => {
  let countBarcodes = require('../../lib/pos/countBarcodes');
  it('should return countedBarcodes when given unCountedBarcodes without repeat barcode', () => {
    const noRepeatBarcode = [
      {barcode: 'ITEM00001', count: 1},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ];
    const expectCountedBarcodes = [
      {barcode: 'ITEM00001', count: 1},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ];
    const countedBarcodes = countBarcodes(noRepeatBarcode);
    expect(countedBarcodes).toEqual(expectCountedBarcodes);
  });
  it('should return countedBarcodes when given unCountedBarcodes with repeat barcodes', () => {
    const repeatBarcode = [
      {barcode: 'ITEM00001', count: 1},
      {barcode: 'ITEM00001', count: 4.5},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ];
    const expectCountedBarcodes = [
      {barcode: 'ITEM00001', count: 5.5},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ];
    const countedBarcodes = countBarcodes(repeatBarcode);
    expect(countedBarcodes).toEqual(expectCountedBarcodes);
  })
});