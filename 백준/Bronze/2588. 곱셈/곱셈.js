let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line = [];

line.push(Number(input[0]));
line.push(Number(input[1]));

let bString = input[1].split('');

line.push(Number(input[0]) * Number(bString[2]));
line.push(Number(input[0]) * Number(bString[1]));
line.push(Number(input[0]) * Number(bString[0]));
line.push(Number(input[0]) * Number(input[1]));

for(let i=2; i<6; i++) {
    console.log(line[i]);
}