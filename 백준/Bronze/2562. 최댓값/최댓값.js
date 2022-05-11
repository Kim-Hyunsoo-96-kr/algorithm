const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const max = {value: Number.MIN_SAFE_INTEGER, index: -1};

for(let i=0; i<input.length; i++) {
    let tmpNum = Number(input[i]);
    if(tmpNum > max.value) {
        max.value = tmpNum;
        max.index = i+1;
    }
}

console.log(max.value);
console.log(max.index);