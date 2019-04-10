function persistence(num) {
  if(num < 10) return 0;
  let result = num;
  let i = 0;
  function multipleDigits(digits) {
    return String(digits)
      .split('')
      .reduce((a, b) => a * b);
  }
  do {
    result = multipleDigits(result);
    i++;
  } while(result >= 10);
  return i;
}

console.log(persistence(39));
console.log(persistence(3));
