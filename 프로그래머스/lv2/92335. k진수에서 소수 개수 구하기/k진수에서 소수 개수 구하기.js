function solution(n, k) {
  var answer = 0;

  let kNum = convert(n, k)
    .split('0')
    .map((el) => Number(el))
    .filter((el) => el !== 0);
  // console.log(kNum);

  kNum.forEach((el) => {
    if (isPrime(el)) answer++;
  });
  return answer;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function convert(n, k) {
  let result = [];

  while (n !== 0) {
    let rest = n % k;
    result.unshift(rest);
    n = (n - rest) / k;
  }
  result = result.join('');
  // console.log(result);
  return result;
}
