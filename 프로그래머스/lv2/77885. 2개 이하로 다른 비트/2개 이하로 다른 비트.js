function solution(numbers) {
  var answer = [];

  numbers.forEach((el) => {
    let bin = toBinary(el);
    if (bin[0] === 0) answer.push(el + 1);
    else {
      for (let i = 0; i < bin.length; i++) {
        if (bin[i] === 0) {
          bin[i] = 1;
          bin[i - 1] = 0;
          break;
        }
        if (i === bin.length - 1) {
          bin[i] = 0;
          bin.push(1);
          break;
        }
      }
      answer.push(convertNum(bin));
    }
  });
  return answer;
}

function convertNum(arr) {
  let result = 0;
  let expont = 1;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * expont;
    expont = expont * 2;
  }
  return result;
}

function toBinary(num) {
  let answer = [];
  if (num === 0) return [0];
  while (num !== 0) {
    answer.push(num % 2);
    num = Math.floor(num / 2);
  }

  return answer;
}
