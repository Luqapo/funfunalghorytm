function fizzBuzz(num) {
  let count = 0;
  while(count < num) {
    count++;
    if(count % 15 === 0) console.log('FizzBuzz');
    else if(count % 3 === 0) console.log('Fizz');
    else if(count % 5 === 0) console.log('Buzz');
    else console.log(count);
  }
}
fizzBuzz(20);
