let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const gap = 2541 - 1998;

console.log(Number(input) - gap)