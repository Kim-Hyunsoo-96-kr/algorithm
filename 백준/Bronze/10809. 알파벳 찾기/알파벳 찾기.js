const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let arr = [];
let text = '';

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  arr.push(-1);
}

for (let i = 0; i < input.length; i++) {
  let index = input[i].charCodeAt() - 'a'.charCodeAt();
  if (arr[index] === -1) arr[index] = i;
}

for (let i = 0; i < arr.length; i++) {
  text += `${arr[i]} `;
}
text.trim();

console.log(text);
