const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);
const numbers = input[1].split(' ');

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for(let i=0; i<numbers.length; i++) {
    let tmpNum = Number(numbers[i]);
    
    if(max < tmpNum) max = tmpNum;
    if(min > tmpNum) min = tmpNum;
}

console.log(`${min} ${max}`);