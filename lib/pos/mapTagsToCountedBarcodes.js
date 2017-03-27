'use strict';

const mapTagsToCountedBarcodes = tags => {
  if (tags.length === 0) return [];
  const [barcode, countStr] = tags[0].split('-');
  const count = countStr ? parseInt(countStr) : 1;
  return [{barcode: barcode, count: count}];
};

module.exports = mapTagsToCountedBarcodes;