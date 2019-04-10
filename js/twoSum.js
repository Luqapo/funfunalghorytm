function twoSum(arr, sum) {
  let index = 0;
  const result = [];
  for(let i = 1; i < arr.length; i++) {
    const returnArr = [arr[index], arr[i]];
    if(returnArr[0] + returnArr[1] === sum) {
      result.push(returnArr);
      index++;
    } else if(i === arr.length - 1 && index < arr.length - 1) {
      index++;
      i = 0;
    }
  }
  console.log(result);
  return result;
}

twoSum([1, 6, 4, 5, 3, 3], 7);
