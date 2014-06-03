/**
 * Return all items from `list` that match the given `example`.
 */
module.exports = function matching(example, list) {
  if (!list) return [];
  return Array.prototype.filter.call(list, function matches(obj) {
    if (!obj) return;
    for (var p in example) {
      if (obj[p] !== example[p]) return;
    }
    return true;
  });
};
