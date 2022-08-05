function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    let tmp = s.slice(i) + s.slice(0, i);
    if (isRight(tmp)) answer++;
  }
  return answer;
}

function isRight(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) stack.push(s[i]);
    else {
      switch (s[i]) {
        case ')':
          if (stack[stack.length - 1] === '(') stack.pop();
          else stack.push(s[i]);
          break;
        case '}':
          if (stack[stack.length - 1] === '{') stack.pop();
          else stack.push(s[i]);
          break;
        case ']':
          if (stack[stack.length - 1] === '[') stack.pop();
          else stack.push(s[i]);
          break;
        default:
          stack.push(s[i]);
          break;
      }
    }
  }
  if (stack.length !== 0) return false;
  else return true;
}