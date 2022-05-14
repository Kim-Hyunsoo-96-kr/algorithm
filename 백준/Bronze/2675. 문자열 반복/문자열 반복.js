const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numTestCase = Number(input[0]);
let text = '';

for (let i = 1; i < input.length; i++) {
  const tmp = input[i].split(' ');
  const repeatNum = Number(tmp[0]);
  for (let j = 0; j < tmp[1].length; j++) {
    text += tmp[1][j].repeat(repeatNum);
  }
  text += '\n';
}
text.trim();

console.log(text);
