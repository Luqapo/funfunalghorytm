function number2words(n) {
  if (n === 0) return 'zero';
  // works for numbers between 0 and 999999 
  const myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
    [100, 'hundert'],
    [1000, 'tousand']
  ]);
  const newArray = String(n)
    .split('')
    .map(n => parseInt(n));
  while (newArray.length < 6) {
    newArray.unshift(0);
  }
  const m = newArray
    .map(n => String(n))
    .join()
    .replace(/,/g, '');
  let tens = 0;
  let tousand = false;
  const array = String(m)
    .split('')
    .map(n => parseInt(n))
    .map((n, index) => {
      if (index === 0 && n) {
        tousand = true;
        return `${myMap.get(n)} hundred `;
      } else if(index === 1 && n > 1) {
        tousand = true;
        return `${myMap.get(n*10)}-`
      } else if (index === 1 && n === 1) {
        tousand = true;
        tens = 10
        return ''
      } else if (index === 2 && n) {
        const result = `${myMap.get(tens+n)} thousand `;
        tens = 0;
        return result;
      } else if (index === 2 && !n && tousand) {
        return 'tousand '
      } else if (index === 3 && n) {
        tens = 0;
        return `${myMap.get(n)} hundred `
      } else if (index === 4 && n > 1) {
        tens = 0;
        return `${myMap.get(n*10)}-`
      } else if (index === 4 && n === 1) {
        tens = 10
        return ''
      } else {
        if(tens) {
          return myMap.get(tens + n);
        }
        return myMap.get(n);
      }
    })
    .join()
    .replace(/,/g, '')
    .replace(/-$/, '')
    .replace(/-tousand/, ' tousand')
    .trim();

  return array;
}
console.log(number2words(3));
console.log(number2words(1803));
console.log(number2words(8330));
console.log(number2words(50));
console.log(number2words(880888));

/*
number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight" */