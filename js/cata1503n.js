function deepCount(a) {
  let result = 0;
  function countArr(arr) {
    result += arr.length;
    arr.forEach((el) => {
      if(Array.isArray(el)) {
        countArr(el);
      }
    });
  }
  countArr(a);
  return result;
}

deepCount([[[[[[[[[]]]]]]]]]);
