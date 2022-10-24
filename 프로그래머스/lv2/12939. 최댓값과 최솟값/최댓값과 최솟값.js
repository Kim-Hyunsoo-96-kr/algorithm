function solution(s) {
  var answer = '';
  const sArr = s.split(' ').map((el) => Number(el));
  let max = sArr[0];
  let min = sArr[0];

  sArr.forEach((el) => {
    if (el > max) max = el;
    if (el < min) min = el;
  });

  answer = min.toString() + ' ' + max.toString();
  return answer;
}