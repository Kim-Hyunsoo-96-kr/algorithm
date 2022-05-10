const fs = require('fs');
let num = Number(fs.readFileSync('/dev/stdin'));

for(let i=1; i<=9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}