function fibonacci(index, cache) {
  cache = cache || [];
  if(cache[index]) return cache[index];
  if(index < 3) return 1;
  cache[index] = fibonacci(index - 2, cache) + fibonacci(index - 1, cache);
  return cache[index];
}

console.log(fibonacci(1999));
