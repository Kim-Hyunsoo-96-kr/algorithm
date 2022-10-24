function solution(s) {
  let answer = '';
  answer = s
    .split(' ')
    .map((el) => {
      el = el.split('').map((char, idx) => {
        if (idx === 0) return char.toUpperCase();
        else return char.toLowerCase();
      });
      return el.join('');
    })
    .join(' ');
  return answer;
}