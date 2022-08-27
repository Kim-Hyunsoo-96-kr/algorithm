function solution(word) {
  var answer = 0;
  const char = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  function helper(tmpWord) {
    if (tmpWord.length === 6) {
      return;
    } else {
      // console.log(tmpWord);
      count++;
      if (tmpWord === word) answer = count - 1;
      for (let i = 0; i < char.length; i++) {
        helper(tmpWord + char[i]);
      }
    }
  }
  helper('');

  return answer;
}