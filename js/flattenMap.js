function flatten(obj, keys, result) {
  Object.keys(obj).forEach((key) => {
    if(!obj[key]) {
      result[keys + key] = obj[key];
      return;
    }
    if(Array.isArray(obj[key])) {
      result[keys + key] = obj[key];
      return;
    }
    if(typeof obj[key] === 'object') {
      flatten(obj[key], `${keys}${key}/`, result);
    } else result[keys + key] = obj[key];
  });
}
function flattenMap(map) {
  const result = {};
  Object.keys(map).forEach((key) => {
    if(!map[key]) {
      result[key] = map[key];
      return;
    }
    if(Array.isArray(map[key])) {
      result[key] = map[key];
      return;
    }
    if(typeof map[key] === 'object') {
      flatten(map[key], `${key}/`, result);
    } else result[key] = map[key];
  });
  return result;
}
flattenMap({
  a: {
    b: {
      c: 12,
      d: 'Hello World',
    },
    e: [1, 2, 3],
  },
});
