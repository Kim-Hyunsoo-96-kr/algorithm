const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
let count = 0;
for (let i = 1; i <= input; i++) {
  if (isPerfectNum(i)) count++;
}
console.log(count);

function isPerfectNum(num) {
  if (num < 10) return true;
  else {
    let tmp = num.toString();
    tmp = tmp.split('');
    let diff = Number(tmp[1]) - Number(tmp[0]);
    for (let i = 1; i < tmp.length; i++) {
      if (Number(tmp[i]) - Number(tmp[i - 1]) !== diff) return false;
    }
    return true;
  }
}
