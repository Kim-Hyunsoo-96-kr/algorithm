const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let numbers = input[1].split(' ').map((el) => Number(el));

let count = 0;

function isPrime(num) {
    if(num === 1) return false;
    for(let i=2; i<num; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

numbers.forEach((el) => {
    if(isPrime(el)) count++;
})
console.log(count);
