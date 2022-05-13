const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const leng = Number(input[0]);
let text = "";

for(let i=1; i<input.length; i++) {
    text += `${gradeScore(input[i])}\n`;
}

text.trim();
console.log(text);

function gradeScore(str) {
    let scoreStack = 0;
    let score = 0;
    
    for(let x of str) {
        if(x === 'O') {
            scoreStack++;
            score += scoreStack;
        }
        else {
            scoreStack = 0;
        }
    }
    return score;
}