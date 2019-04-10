function getGeneration(cells, generations) {
  let resultArr = [];
  let gen = 0;
  function calculateTick(n, m, life) {
    let lifeCount = 0;
    if((n > 0 && m > 0) && cells[n - 1][m - 1] === 1) lifeCount++;
    if(n > 0 && cells[n - 1][m] === 1) lifeCount++;
    if((n > 0 && m < cells[0].length - 1) && cells[n - 1][m + 1] === 1) lifeCount++;
    if(m > 0 && cells[n][m - 1] === 1) lifeCount++;
    if(m < cells[0].length - 1 && cells[n][m + 1] === 1) lifeCount++;
    if((n < cells.length - 1 && m > 0) && cells[n + 1][m - 1]) lifeCount++;
    if(n < cells.length - 1 && cells[n + 1][m] === 1) lifeCount++;
    if((n < cells.length - 1 && m < cells[0].length - 1) && cells[n + 1][m + 1] === 1) lifeCount++;
    if(life && (lifeCount === 2 || lifeCount === 3)) return 1;
    if(!life && lifeCount === 3) return 1;
    return 0;
  }
  function checkBorder() {
    let borderDownCount = false;
    let borderRightCount = false;
    let borderLeftCount = false;
    let borderUpCount = false;
    for(let n = 0; n < cells.length; n++) {
      for(let m = 0; m < cells[0].length; m++) {
        if(n === 0 && m < cells[0].length - 2 && cells[n][m] === 1
            && cells[n][m + 1] === 1 && cells[n][m + 2] === 1) {
          borderDownCount = true;
        }
        if(m === 0 && n < cells.length - 2 && cells[n][m] === 1
            && cells[n + 1][m] === 1 && cells[n + 2][m] === 1) {
          borderLeftCount = true;
        }
        if(n === cells.length - 1 && m >= 2 && cells[n][m] === 1
            && cells[n][m - 1] === 1 && cells[n][m - 2] === 1) {
          borderUpCount = true;
        }
        if(m === cells[0].length - 1 && n >= 2 && cells[n][m] === 1
            && cells[n - 1][m] === 1 && cells[n - 2][m] === 1) {
          borderRightCount = true;
        }
      }
    }
    return { borderDownCount, borderUpCount, borderLeftCount, borderRightCount };
  }
  function calGen() {
    for(let n = 0; n < cells.length; n++) {
      resultArr.push([]);
      for(let m = 0; m < cells[0].length; m++) {
        resultArr[n].push(calculateTick(n, m, cells[n][m]));
      }
    }
  }
  function checkBorderClear() {
    let borderDownclear = true;
    let borderRightclear = true;
    let borderLeftclear = true;
    let borderUpclear = true;
    for(let n = 0; n < cells.length; n++) {
      for(let m = 0; m < cells[0].length; m++) {
        if(n === 0 && cells[n][m] === 1) {
          borderDownclear = false;
        }
        if(m === 0 && cells[n][m] === 1) {
          borderLeftclear = false;
        }
        if(n === cells.length - 1 && cells[n][m] === 1) {
          borderUpclear = false;
        }
        if(m === cells[0].length - 1 && cells[n][m] === 1) {
          borderRightclear = false;
        }
      }
    }
    return { borderUpclear, borderLeftclear, borderDownclear, borderRightclear };
  }
  function clearBorder({ borderUpclear, borderLeftclear, borderDownclear, borderRightclear }) {
    if(borderUpclear) {
      cells.pop();
    }
    if(borderDownclear) {
      cells.shift();
    }
    if(borderLeftclear) {
      cells.forEach((cell) => {
        cell.shift();
      });
    }
    if(borderRightclear) {
      cells.forEach((cell) => {
        cell.pop();
      });
    }
  }
  function countBorder({ borderDownCount, borderUpCount, borderLeftCount, borderRightCount }) {
    if(borderUpCount) {
      const arrToAdd = [];
      while(arrToAdd.length < cells[0].length) arrToAdd.push(0);
      cells.push(arrToAdd);
    }
    if(borderDownCount) {
      const arrToAdd = [];
      while(arrToAdd.length < cells[0].length) arrToAdd.push(0);
      cells.unshift(arrToAdd);
    }
    if(borderLeftCount) {
      cells.forEach((cell) => {
        cell.unshift(0);
      });
    }
    if(borderRightCount) {
      cells.forEach((cell) => {
        cell.push(0);
      });
    }
  }
  while(gen < generations) {
    countBorder(checkBorder());
    calGen();
    cells = resultArr;
    clearBorder(checkBorderClear());
    console.log(cells);
    resultArr = [];
    gen++;
  }
  return cells;
}
getGeneration([ [ 1, 0, 0 ], [ 0, 1, 1 ], [ 1, 1, 0 ] ], 40);

