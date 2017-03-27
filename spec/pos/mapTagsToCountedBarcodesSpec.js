describe('map tags to barcodes with count', () => {
  const mapTagsToCountedBarcodes = require('../../lib/pos/mapTagsToCountedBarcodes');
  it('should return empty array when given an empty array', () => {
    expect(mapTagsToCountedBarcodes([])).toEqual([]);
  });
  it('should return countedBarcodes with count is 1 when given tags without repeat barcode', () => {
    const tags = ['ITEM00001'];
    const expectCountedBarcode = [{barcode: 'ITEM00001', count: 1}];
    expect(mapTagsToCountedBarcodes(tags)).toEqual(expectCountedBarcode);
  });
});