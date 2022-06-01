const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = '';
let num = input;
let primeNum = 2;

while(num !== 1) {
    if(num % primeNum === 0) {
        answer += `${primeNum}\n`;
        num = num / primeNum;
    }
    else {
        primeNum++;
    }
}

console.log(answer);