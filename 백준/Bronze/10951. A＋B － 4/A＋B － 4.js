const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let text = "";

for(let i=0; i< input.length; i++) {
    let tmp = input[i].split(' ');
    text += `${Number(tmp[0]) + Number(tmp[1])}\n`;
}
console.log(text);