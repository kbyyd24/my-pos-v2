'use strict';

const mapTagsToCountedBarcodes = tags => {
  return tags.length > 0 ? [{barcode: tags[0], count: 1}] : [];
};

module.exports = mapTagsToCountedBarcodes;