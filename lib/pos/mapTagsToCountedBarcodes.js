'use strict';

const mapTagsToCountedBarcodes = tags => {
  if (tags.length === 0) return [];
  let countedBarcodes = [];
  tags.forEach(tag => {
    const [barcode, countStr] = tag.split('-');
    const count = countStr ? parseFloat(countStr) : 1;
    const countedBarcode = findCountedBarcode(barcode, countedBarcodes);
    if (countedBarcode) {
      countedBarcode.count += count;
    } else {
      countedBarcodes.push({barcode: barcode, count: count});
    }
  });
  return countedBarcodes;
};

const findCountedBarcode = (barcode, countedBarcodes) => {
  for (let countedBarcode of countedBarcodes) {
    if (countedBarcode.barcode === barcode) {
      return countedBarcode;
    }
  }
  return null;
}

module.exports = mapTagsToCountedBarcodes;