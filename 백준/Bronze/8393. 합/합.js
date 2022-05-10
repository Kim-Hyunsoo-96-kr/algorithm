const fs = require('fs');
let num = Number(fs.readFileSync('/dev/stdin'));

let sum = 0;

for(let i=1; i<=num; i++) {
    sum += i;
}
console.log(sum);