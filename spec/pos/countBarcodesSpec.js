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
    for (let i = 0; i < countedBarcodes.length; i++) {
      expect(countedBarcodes[i].barcode).toEqual(expectCountedBarcodes[i].barcode);
      expect(countedBarcodes[i].count).toEqual(expectCountedBarcodes[i].count);
    }
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
    for (let i = 0; i < countedBarcodes.length; i++) {
      expect(countedBarcodes[i].barcode).toEqual(expectCountedBarcodes[i].barcode);
      expect(countedBarcodes[i].count).toEqual(expectCountedBarcodes[i].count);
    }
  })
});