function solution(numbers) {
  var answer = 0;
  const numberArr = numbers.split('');
  let checkNum = [];
  const sub = subset(numberArr);
  console.log(sub);
  sub.forEach((el) => {
    permutation(el).forEach((e) => {
      checkNum.push(e);
    });
  });
  checkNum = checkNum.map((el) => Number(el));
  checkNumSet = new Set(checkNum);

  checkNum = Array.from(checkNumSet);
  console.log(checkNum);
  checkNum.forEach((el) => {
    if (isPrime(el)) answer++;
  });
  return answer;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  console.log(number);
  return true;
}

function permutation(arr) {
  let depth = 0;
  let result = [];
  let end = arr.length;

  function helper(arr, idx) {
    if (idx === end) {
      result.push(arr.join(''));
    } else {
      for (let i = idx; i < end; i++) {
        helper(swap(idx, i, arr), idx + 1);
      }
    }
  }
  helper(arr, 0);
  return result;
}

function swap(idx1, idx2, arr) {
  let result = arr.slice(0);
  [result[idx1], result[idx2]] = [result[idx2], result[idx1]];
  return result;
}

function subset(arr) {
  let end = arr.length;
  let result = [];

  function helper(arr, idx) {
    if (idx === end) result.push(arr);
    else {
      let tmp1 = arr.slice(0);
      helper(tmp1, idx + 1);
      let tmp2 = arr.slice(0);
      tmp2[idx] = '';
      helper(tmp2, idx + 1);
    }
  }
  helper(arr, 0);
  return result;
}