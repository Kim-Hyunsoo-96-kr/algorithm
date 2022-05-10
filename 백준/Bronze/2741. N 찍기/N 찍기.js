const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
let text = "";
for(let i=1; i<=input; i++) {
    text += `${i}\n`;
}
console.log(text);