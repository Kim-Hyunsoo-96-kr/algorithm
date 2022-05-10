function process(number) {
    let back = number % 10;
    let front = (number - back) / 10;
    let nextNum = back + front;
    return back * 10 + (nextNum % 10);
}

const fs = require('fs');
let num = Number(fs.readFileSync('/dev/stdin'));
let count = 1;
let nextNum = process(num);

while(num != nextNum) {
    nextNum = process(nextNum);
    count++;
}

console.log(count);
