'use strict';

function parseBarcodes(tags) {
  let unCountedBarcodes = [];
  for (const tag of tags) {
    unCountedBarcodes.push({barcode: tag, count: 1});
  }
  return unCountedBarcodes;
}

module.exports = parseBarcodes;