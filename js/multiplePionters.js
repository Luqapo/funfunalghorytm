function countUniqueVal(arr) {
  let i = 0;
  let j = 1;
  if(arr[i] !== arr[j] && arr.length === 2) return 2;
  while(j < arr.length) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else j++;
  }
  return i + 1;
}

console.log(countUniqueVal([1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12]));
