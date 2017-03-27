describe('map tags to barcodes with count', () => {
  const mapTagsToCountedBarcodes = require('../../lib/pos/mapTagsToCountedBarcodes');
  it('should return empty array when given an empty array', () => {
    expect(mapTagsToCountedBarcodes([])).toEqual([]);
  });
});