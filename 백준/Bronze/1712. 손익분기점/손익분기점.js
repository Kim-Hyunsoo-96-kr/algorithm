const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const staticCost = Number(input[0]);
const manufactureCost = Number(input[1]);
const price = Number(input[2]);

if(manufactureCost >= price) console.log(-1);

else {
    let breakEvenPoint = staticCost / (price - manufactureCost);
    console.log(Math.floor(breakEvenPoint) + 1);
}