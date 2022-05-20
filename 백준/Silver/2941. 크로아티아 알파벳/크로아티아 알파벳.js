const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const croatiaChars = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for(let x of croatiaChars) {
  const reg = new RegExp(`${x}`, 'g');
  input = input.replace(reg, 'a');
}

console.log(input.length);