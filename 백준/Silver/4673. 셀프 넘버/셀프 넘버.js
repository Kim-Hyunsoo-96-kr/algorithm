let numArr = [];
let text = '';
let input = 10000;

for (let i = 0; i <= input; i++) {
  numArr.push(i);
}

for (let i = 1; i <= input; i++) {
  let selfNum = makeSelfNum(i);
  while (!(selfNum > input || numArr[i] === -1)) {
    numArr[selfNum] = -1;
    selfNum = makeSelfNum(selfNum);
  }
}

for (let i = 1; i <= input; i++) {
  if (numArr[i] !== -1) {
    text += `${numArr[i]}\n`;
  }
}
text.trim();
console.log(text);

function makeSelfNum(num) {
  let tmp = num.toString().split('');
  let result = num;
  for (let i = 0; i < tmp.length; i++) {
    result += Number(tmp[i]);
  }
  return result;
}
