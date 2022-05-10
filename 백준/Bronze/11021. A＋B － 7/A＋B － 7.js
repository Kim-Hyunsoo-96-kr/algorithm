const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let text = "";

for(let i = 1; i <= Number(input[0]); i++) {
    let tmp = input[i].split(' ');
    text += `Case #${i}: ${Number(tmp[0]) + Number(tmp[1])}\n`;
}
console.log(text);