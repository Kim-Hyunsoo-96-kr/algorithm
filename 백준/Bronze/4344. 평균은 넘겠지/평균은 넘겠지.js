const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const leng = Number(input[0]);

let text = "";

for (let i = 1; i < input.length; i++) {
  text += `${calculateRate(input[i])}%\n`;
}
text.trim();

console.log(text);

function calculateRate(str) {
  let score = str.split(" ");
  let leng = score.length;
  let sum = 0;
  let count = 0;

  for (let i = 1; i < leng; i++) {
    score[i] = Number(score[i]);
    sum += score[i];
  }
  let mean = sum / (leng - 1);

  for (let i = 1; i < leng; i++) {
    if (score[i] > mean) count++;
  }

  return ((100 * count) / (leng - 1)).toFixed(3);
}
