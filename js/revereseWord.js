function reverseWords(arr) {
  for(let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    const var1 = arr[i];
    arr[i] = arr[j];
    arr[j] = var1;
  }
  return arr;
}

console.log(reverseWords([1, 2, 3, 4, 5, 6, 7, 8, 9]));
