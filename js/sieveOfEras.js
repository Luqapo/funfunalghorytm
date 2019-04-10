function sieveOfErastothenes(num) {
  const array = [];
  while(array.length < num + 1) {
    if(array.length > 1) array.push(true);
    else array.push(false);
  }
  for(let j = 2; j < Math.sqrt(num); j++) {
    for(let i = 2; i * j < num; i++) {
      array[j * i] = false;
    }
  }
  return array.map((el, index) => {
    if(el) return index;
  }).filter(Boolean);
}

console.log(sieveOfErastothenes(20));
