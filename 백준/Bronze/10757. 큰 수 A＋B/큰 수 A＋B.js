const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);

console.log((num1 + num2).toString());