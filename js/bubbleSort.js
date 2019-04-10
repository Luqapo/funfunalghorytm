function random(min = 1, max = 100) {
  return Math.round(Math.random() * (max - min) + min);
}

const array = [];

while(array.length < 200) {
  array.push(random());
}
const unique = [...new Set(array)];

function bubbleSort([...arr]) {
  for(let j = arr.length - 1; j > 0; j--) {
    for(let i = 0; i < j; i++) {
      if(arr[i + 1] < arr[i]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(unique));
