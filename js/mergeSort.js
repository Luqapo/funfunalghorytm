function random(min = 1, max = 100) {
  return Math.round(Math.random() * (max - min) + min);
}

const array = [];

while(array.length < 200) {
  array.push(random());
}
const unique = [...new Set(array)];

function merge(ar1, ar2) {
  let result = [];
  while(ar1.length && ar2.length) {
    if(ar1[0] > ar2[0]) {
      result.push(ar2.shift());
    } else result.push(ar1.shift());
  }
  if(ar1.length) result = [...result, ...ar1];
  else result = [...result, ...ar2];
  return result;
}

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  const arr1 = arr.slice(0, Math.floor(arr.length / 2));
  const arr2 = arr.slice(Math.floor(arr.length / 2));
  return merge(mergeSort(arr1), mergeSort(arr2));
}

console.log(mergeSort(unique));
