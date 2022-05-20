const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numOfWord = Number(input[0]);
let count = 0;

for(let i=1; i<=numOfWord; i++) {
  if(isGroupWord(input[i])) count++;
}

console.log(count);

function isGroupWord(str) {
  let wordStack = [];
  let preChar = null;

  for(let i=0; i<str.length; i++) {
    if(preChar === null) {
      preChar = str[i];
      wordStack.push(str[i]);
    }
    else {
      if(preChar !== str[i]) {
        if(wordStack.includes(str[i])) return false;
        else {
          preChar = str[i];
          wordStack.push(str[i]);
        }
      }
    }
  }
  return true;
}