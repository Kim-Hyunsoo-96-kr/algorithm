const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let flag = Number(input[0].split(' ')[1]);
let numbers = input[1].split(' ');
let text = "";

for(let i=0; i<numbers.length; i++) {
    if(Number(numbers[i]) < flag) {
        text += `${numbers[i]} `;
    }
}
text.trim();
console.log(text);
