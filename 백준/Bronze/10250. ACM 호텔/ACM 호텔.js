const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numTest = Number(input[0]);

for(let i=1; i<=numTest; i++) {
  let inputArr = input[i].split(' ');
  for(let i=0; i<inputArr.length; i++) {
    inputArr[i] = Number(inputArr[i]);
  }
  console.log(roomNumber(...inputArr));
}

function roomNumber(height, width, N) {
  let floor = N % height;
  if(floor === 0) floor = height;
  let roomNum = Math.ceil(N / height);

  return 100 * floor + roomNum;
}