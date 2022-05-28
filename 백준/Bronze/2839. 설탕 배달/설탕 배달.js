const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin'));

const max5kg = Math.floor(input / 5);
let count = 0;
for(let i=max5kg; i>=0; i--) {
  if((input - 5 * i) / 3 === Math.floor((input - 5 * i) / 3)) {
    count = i + ((input - 5 * i) / 3);
    console.log(count);
    break;
  }
}
if(count === 0) console.log(-1);