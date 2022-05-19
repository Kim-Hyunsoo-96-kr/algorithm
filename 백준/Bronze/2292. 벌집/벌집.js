const fs = require('fs');
const input = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

let distance = 1;
let endPoint = 1;

if(input === endPoint) console.log(distance);

while(input > endPoint) {
    endPoint = endPoint + 6*distance;
    distance++;
}

console.log(distance);