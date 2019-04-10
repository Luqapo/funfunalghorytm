function incrementString(string) {
  const arr = string.match(/(?<word>\D+)(?<num>\d+)/);
  const { groups: { num, word } } = arr;
  if(Number(string)) return String(+string + 1);
  if(!arr) return string + 1;
  let sum = String(+arr[2] + 1);
  while(sum.length < arr[2].length) {
    sum = 0 + sum;
  }
  return arr[1] + sum;
}

console.log(incrementString('sdgfsdfga00678561'));
