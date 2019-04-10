function maxStockProfit(arr) {
  let min = arr[0];
  let minI = 0;
  let max = arr[0];
  let maxI = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
      minI = i;
    } else if(arr[i] > max) {
      max = arr[i];
      maxI = i;
    }
  }
  if(minI < maxI) {
    return max - min;
  }
  if(min === max) return 0;
  return -1;
}

console.log(maxStockProfit([56, 46, 56, 38, 40, 48, 42]));
