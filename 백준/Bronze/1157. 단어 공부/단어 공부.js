const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

const alphaObj = {};
let maxStack = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] in alphaObj) {
    alphaObj[input[i]]++;
  } else {
    alphaObj[input[i]] = 1;
  }
}

let max = 0;
for (let key in alphaObj) {
  if (maxStack.length === 0) {
    maxStack.push(key);
    max = alphaObj[key];
  } else {
    if (alphaObj[key] > max) {
      maxStack = [];
      maxStack.push(key);
      max = alphaObj[key];
    } else if (alphaObj[key] === max) {
      maxStack.push(key);
    }
  }
}

if (maxStack.length === 1) {
  console.log(maxStack[0]);
} else {
  console.log('?');
}
