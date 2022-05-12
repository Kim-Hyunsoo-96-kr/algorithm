const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let mul = 1;
const numArr = [0,0,0,0,0,0,0,0,0,0];

for(let i=0; i<input.length; i++) {
    mul *= Number(input[i]);
}

while(mul !== 0) {
    let rest = mul % 10;
    numArr[rest]++;
    mul = Math.floor(mul/10);
}

for(let i=0; i<numArr.length; i++) {
    console.log(numArr[i]);
}
