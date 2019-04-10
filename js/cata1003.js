function bouncingBall(h, bounce, window) {
  if(typeof h !== 'number' || h <= 0) return -1;
  if(typeof bounce !== 'number' || (bounce <= 0 || bounce >= 1)) return -1;
  if(typeof window !== 'number' || (window <= 0 || window >= h)) return -1;
  let count = 1;
  let rebounce = h;
  while(rebounce > window) {
    rebounce *= bounce;
    console.log(rebounce, count);
    count += 2;
  }
  return count - 2;
}

console.log(bouncingBall(30.0, 0.66, 1.5));
