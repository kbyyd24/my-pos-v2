describe('parse barcodes', () => {
  let parseBarcodes = require('../../lib/pos/parseBarcodes');
  it('should return unContedBarcodes without split char when given barcodes without count', () => {
    let barcodes = [
      'ITEM00001',
      'ITEM00003',
      'ITEM00005'
    ];
    let expectResult = [
      {barcode: 'ITEM00001', count: 1},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ];
    let unCountedBarcodes = parseBarcodes(barcodes);
    for (let i = 0; i < unCountedBarcodes.length; i++) {
      expect(unCountedBarcodes[i].barcode).toEqual(expectResult[i].barcode);
      expect(unCountedBarcodes[i].count).toEqual(expectResult[i].count);
    }
  });
  it('should return unCountedBarcodes with split char when given barcodes with count', () => {
    let barcodes = [
      'ITEM00001-2',
      'ITEM00003-3.2'
    ];
    let expectResult = [
      {barcode: 'ITEM00001', count: 2},
      {barcode: 'ITEM00003', count: 3.2}
    ];
    let unCountedBarcodes = parseBarcodes(barcodes);
    for (let i = 0; i < unCountedBarcodes.length; i++) {
      expect(unCountedBarcodes[i].barcode).toEqual(expectResult[i].barcode);
      expect(unCountedBarcodes[i].count).toEqual(expectResult[i].count);
    }
  })
});