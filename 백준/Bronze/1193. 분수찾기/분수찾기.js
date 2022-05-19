const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let row = 0;
let col = 0;

let digonal = 1;
let count = 0;

while(1) {
    count += digonal;
    if(count >= input) break;
    digonal++;
}

count -= digonal;

if(digonal % 2 === 0) {
    row = 0;
    col = digonal+1;

    for(let i=0; i<input-count; i++) {
        row++;
        col--;
    }
}
else {
    row = digonal+1;
    col = 0;

    for(let i=0; i<input-count; i++) {
        row--;
        col++;
    }
}

console.log(`${row}/${col}`);