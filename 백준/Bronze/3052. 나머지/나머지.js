const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let rests = [];

for(let i=0; i<input.length; i++) {
    let tmpRest = Number(input[i]) % 42;
    if(!rests.includes(tmpRest)) {
        rests.push(tmpRest);
    }
}

console.log(rests.length);