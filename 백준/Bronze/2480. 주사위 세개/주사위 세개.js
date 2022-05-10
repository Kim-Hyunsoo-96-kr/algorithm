const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let score = 0;

for(let i=0; i<input.length; i++) {
    input[i] = Number(input[i]);
}

if(input[0] === input[1] && input[1] === input[2]) {
    score = 10000 + input[0] * 1000;
}
else if(input[0] === input[1]) {
    score = 1000 + input[0] * 100;
}
else if(input[1] === input[2]) {
    score = 1000 + input[1] * 100;
}
else if(input[2] === input[0]) {
    score = 1000 + input[2] * 100;
}
else {
    input.sort((a,b) => a-b);
    score = input[2] * 100;
}
console.log(score);