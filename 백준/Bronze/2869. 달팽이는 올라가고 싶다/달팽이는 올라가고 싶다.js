const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const up = Number(input[0]);
const down = Number(input[1]);
const height = Number(input[2]);

let day = Math.ceil((height - up) / (up - down)) + 1;
console.log(day);