const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const dudbo = Number(input[0].split(' ')[0]);
const job = Number(input[0].split(' ')[1]);

const dudboJob = {};
let count = 0;
let answer = [];
for (let i = 0; i < dudbo; i++) {
  dudboJob[input[i + 1]] = true;
}
for (let i = dudbo; i < dudbo + job; i++) {
  if (dudboJob[input[i + 1]]) dudboJob[input[i + 1]] = false;
  else dudboJob[input[i + 1]] = true;
}
for (let x of Object.keys(dudboJob)) {
  if (!dudboJob[x]) {
    count++;
    answer.push(x);
  }
}
answer = answer.sort();
let result = '';
answer.forEach((el) => {
  result += `${el}\n`;
});
result.trim();
console.log(count);
console.log(result);