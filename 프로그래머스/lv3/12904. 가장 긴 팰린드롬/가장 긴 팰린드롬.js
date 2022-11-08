function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (j - i + 1 > answer) if (isPalindrome(i, j, s)) answer = j - i + 1;
    }
  }
  return answer;
}

function isPalindrome(start, end, s) {
  let length = end - start + 1;
  if (length % 2 === 0) {
    for (let i = 0; i < length / 2; i++) {
      if (s[start + i] !== s[end - i]) return false;
    }
  } else {
    for (let i = 0; i < (length - 1) / 2; i++) {
      if (s[start + i] !== s[end - i]) return false;
    }
  }
  return true;
}