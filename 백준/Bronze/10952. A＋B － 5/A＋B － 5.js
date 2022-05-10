const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let text = "";

for(let i=0; i<input.length; i++) {
    let tmp = input[i].split(' ');
    if(tmp[0] !== '0' && tmp[1] !== '0') {
        text += `${Number(tmp[0]) + Number(tmp[1])}\n`;
    }
}
console.log(text);