const fs = require('fs');
let num = Number(fs.readFileSync('/dev/stdin'));
let text = "";

for(let i = 1; i <= num; i++) {
    for(let j = num; j > i; j--) {
        text += " ";
    }
    for(let j = 1; j <= i; j++) {
        text += "*";
    }
    text += "\n";
}
console.log(text);