const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num1 = Number(input[0]);
const num2 = Number(input[1]);
const prime = [];

const isPrime = function(num) {
    if(num === 1) return false;
    for(let i=2; i<num; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

for(let i=num1; i<=num2; i++) {
    if(isPrime(i)) prime.push(i);
}

if(prime.length === 0) console.log(-1);
else {
    let sum = prime.reduce((acc, cur) => acc + cur);
    console.log(sum);
    console.log(prime[0]);
}