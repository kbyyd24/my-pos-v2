'use strict';

function parseBarcodes(tags) {
  let unCountedBarcodes = [];
  tags.forEach(tag => {
    const [barcode, countStr] = tag.split('-');
    const count = countStr ? parseFloat(countStr) : 1;
    unCountedBarcodes.push({barcode: barcode, count: count});
  });
  return unCountedBarcodes;
}

module.exports = parseBarcodes;