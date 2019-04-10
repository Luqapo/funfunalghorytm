function streetFighterSelection(fighters, position, moves) {
  let x = position[0];
  let y = position[1];
  const results = moves.map((move) => {
    switch(move) {
      case 'up':
        if(x === 1) x = 0;
        return fighters[x][y];
      case 'down':
        if(x === 0) x = 1;
        return fighters[x][y];
      case 'left':
        if(y > 0) y -= 1;
        else if(y === 0) y = 5;
        return fighters[x][y];
      case 'right':
        if(y < 5) y += 1;
        else if(y === 5) y = 0;
        return fighters[x][y];
      default:
        return '';
    }
  });
  return results;
}

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

const moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];

const position = [0, 0];

streetFighterSelection(fighters, position, moves);
