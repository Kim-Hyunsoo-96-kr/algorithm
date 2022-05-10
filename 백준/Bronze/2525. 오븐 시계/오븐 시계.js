const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let startTime = input[0].split(' ');
let hour = Number(startTime[0]);
let minute = Number(startTime[1]);
let duration = Number(input[1]);

hour = (hour + Math.floor((minute + duration) / 60)) % 24;
minute = (minute + duration) % 60;

console.log(`${hour} ${minute}`);