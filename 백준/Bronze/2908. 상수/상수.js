const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const num1 = reverseNum(input[0]);
const num2 = reverseNum(input[1]);

if (num1 > num2) console.log(num1);
else console.log(num2);

function reverseNum(numStr) {
  let tmpArr = numStr.split('');
  let result = [];

  while (tmpArr.length !== 0) {
    result.push(tmpArr.pop());
  }
  result = result.join('');
  return Number(result);
}
