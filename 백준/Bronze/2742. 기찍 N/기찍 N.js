const fs = require('fs');
let num = Number(fs.readFileSync('/dev/stdin'));
let text = "";

for(let i=num; i>0; i--) {
    text += `${i}\n`;
}
console.log(text);