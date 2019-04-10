function anagram(str1, str2) {
  const obj1 = {};
  str1.split('').forEach((char) => { obj1[char] = (obj1[char] || 0) + 1; });
  for(let i = 0; i < str2.length; i++) {
    if(!obj1[str2[i]]) return false;
    obj1[str2[i]] -= 1;
  }
  return true;
}

console.log(anagram('anagram', 'nagarom'));
