const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const leng = Number(input[0]);
const numbers = input[1].trim().split('');

let sum = 0;

for (let i = 0; i < leng; i++) {
  sum += Number(numbers[i]);
}

console.log(sum);
