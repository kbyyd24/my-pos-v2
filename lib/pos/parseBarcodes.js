'use strict';

function parseBarcodes(tags) {
  return tags.map(tag => {
    const [barcode, countStr] = tag.split('-');
    const count = countStr ? parseFloat(countStr) : 1;
    return {barcode: barcode, count: count};
  });
}

module.exports = parseBarcodes;