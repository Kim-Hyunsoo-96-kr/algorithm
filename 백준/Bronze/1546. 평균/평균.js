function findMax(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++) {
        let tmpNum = Number(arr[i]);
        if(tmpNum > max) max = tmpNum;
    }
    return max;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const leng = Number(input[0]);
const numbers = input[1].split(' ');
const max = findMax(numbers);
const modifiedScore = [];
let sum = 0;
let result = 0;

for(let x of numbers) {
    modifiedScore.push(Number(x));
}

modifiedScore.sort((a,b) => a-b);

for(let x of modifiedScore) {
    let tmp = x / modifiedScore[leng-1];
    sum += tmp;
}

result = 100 * sum / leng;

console.log(result);
