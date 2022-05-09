const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let minute = Number(input[1]);

if(minute - 45 < 0) {
    if(hour == 0) console.log(`23 ${minute+15}`);
    else console.log(`${hour-1} ${minute+15}`);
}
else console.log(`${hour} ${minute-45}`);