function makeWord(word) {
  if(word.length <= 3) return word;
  const innerStr = word.substr(1, word.length - 2).length;
  return `${word[0]}${innerStr}${word[word.length - 1]}`;
}

function abbreviate(string) {
  const rest = string.match(/\W+/g);
  if(!rest) return makeWord(string);
  const strings = string.split(/\W+/)
    .map(word => makeWord(word))
    .reduce((acc, w, index) => `${acc}${w}${rest[index] ? rest[index] : ''}`, '');

  return strings;
}

// function abbreviate(string) {
//   return string.replace(/\B\w{2,}\B/g, match=> match.length);
// }
console.log(abbreviate('You need, need not want, to complete this code-wars mission'));
