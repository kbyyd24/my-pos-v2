'use strict';

function parseBarcodes(tags) {
  let unCountedBarcodes = [];
  for (const tag of tags) {
    const [barcode, countStr] = tag.split('-');
    const count = countStr ? parseFloat(countStr) : 1;
    unCountedBarcodes.push({barcode: barcode, count: count});
  }
  return unCountedBarcodes;
}

module.exports = parseBarcodes;