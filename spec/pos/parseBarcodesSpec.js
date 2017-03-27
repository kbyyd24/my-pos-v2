describe('parse barcodes', () => {
  const parseBarcodes = require('../../lib/pos/parseBarcodes');
  it('should return unContedBarcodes without split char when given barcodes without count', () => {
    const barcodes = [
      'ITEM00001',
      'ITEM00003',
      'ITEM00005'
    ];
    const expectResult = [
      {barcode: 'ITEM00001', count: 1},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ];
    const unCountedBarcodes = parseBarcodes(barcodes);
    expect(unCountedBarcodes).toEqual(expectResult);
  });
  it('should return unCountedBarcodes with split char when given barcodes with count', () => {
    const barcodes = [
      'ITEM00001-2',
      'ITEM00003-3.2'
    ];
    const expectResult = [
      {barcode: 'ITEM00001', count: 2},
      {barcode: 'ITEM00003', count: 3.2}
    ];
    const unCountedBarcodes = parseBarcodes(barcodes);
    expect(unCountedBarcodes).toEqual(expectResult);
  })
});