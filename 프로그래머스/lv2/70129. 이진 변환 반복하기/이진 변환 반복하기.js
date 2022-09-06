function solution(s) {
  var answer = [];
  let countZero = 0;
  let countChange = 0;

  while (s !== '1') {
    let beforeLength = s.length;
    s = s.replace(/0/g, '');
    // console.log(s);
    let afterLength = s.length;

    countZero += beforeLength - afterLength;
    s = s.length.toString(2);
    countChange++;
  }
  answer = [countChange, countZero];
  return answer;
}
