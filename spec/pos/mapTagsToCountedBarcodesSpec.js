describe('map tags to barcodes with count', () => {
  const mapTagsToCountedBarcodes = require('../../lib/pos/mapTagsToCountedBarcodes');
  it('should return countedBarcodes with count is 1 when given tags without repeat barcode', () => {
    const tags = ['ITEM00001'];
    const expectCountedBarcode = [{barcode: 'ITEM00001', count: 1}];
    expect(mapTagsToCountedBarcodes(tags)).toEqual(expectCountedBarcode);
  });
  it('should return countedBarcodes when given tag with delimiter', () => {
    const tags = ['ITEM00001-4'];
    const expectCountedBarcode = [{barcode: 'ITEM00001', count: 4}];
    expect(mapTagsToCountedBarcodes(tags)).toEqual(expectCountedBarcode);
  });
  it('should return countedBarcodes when given many tags', () => {
    const tags = ['ITEM00001', 'ITEM00001-4', 'ITEM00003-2.5'];
    const expectCountedBarcodes = [
      {barcode: 'ITEM00001', count: 5},
      {barcode: 'ITEM00003', count: 2.5}
    ];
    expect(mapTagsToCountedBarcodes(tags)).toEqual(expectCountedBarcodes);
  });
});