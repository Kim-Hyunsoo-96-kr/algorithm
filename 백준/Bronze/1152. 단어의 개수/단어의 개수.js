const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

let textArr = [];
let tmpStr = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0) {
    tmpStr = str[i];
  } else {
    if (str[i] !== ' ') {
      if (tmpStr !== '') tmpStr += str[i];
      else tmpStr = str[i];
    }
    if (str[i] === ' ') {
      if (tmpStr !== '') {
        textArr.push(tmpStr);
        tmpStr = '';
      }
    }
  }
}
if (tmpStr !== '') textArr.push(tmpStr);

console.log(textArr.length);
