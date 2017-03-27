'use strict';

function countBarcodes(unCountedBarcodes) {
  let countedBarcodes = [];
  for (const unCountedBarcode of unCountedBarcodes) {
    let countedBarcode = findCountedBarcode(unCountedBarcode.barcode, countedBarcodes);
    if (countedBarcode) {
      countedBarcode.count += unCountedBarcode.count;
    } else {
      countedBarcodes.push({barcode: unCountedBarcode.barcode, count: unCountedBarcode.count});
    }
  }
  return countedBarcodes;
}

function findCountedBarcode(barcode, countedBarcodes) {
  for (const countedBarcode of countedBarcodes) {
    if (countedBarcode.barcode === barcode) {
      return countedBarcode;
    }
  }
  return null;
}

module.exports = countBarcodes;