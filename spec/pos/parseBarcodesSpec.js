describe('parse barcodes', () => {
  it('should return unContedBarcodes without split char when given barcodes without count', () => {
    let barcodes = [
      'ITEM000001',
      'ITEM000003',
      'ITEM000005'
    ];
    let expectResult = [
      {barcode: 'ITEM00001', count: 1},
      {barcode: 'ITEM00003', count: 1},
      {barcode: 'ITEM00005', count: 1}
    ]
    let unCountedBarcodes = parseBarcodes(barcodes);
    expect(unCountedBarcodes).toEqual(expectResult);
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
    expect(unCountedBarcodes).toEqual(expectResult);
  })
});