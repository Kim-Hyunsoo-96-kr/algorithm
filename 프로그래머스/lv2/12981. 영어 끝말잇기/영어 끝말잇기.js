function solution(n, words) {
  let answer = [];

  let store = {};
  store[words[0]] = true;
  for (let i = 1; i < words.length; i++) {
    if (store[words[i]] || words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
      answer.push((i % n) + 1);
      answer.push(Math.floor(i / n) + 1);
        break;
    } else {
      store[words[i]] = true;
    }
  }
  console.log(store);
  if (answer.length === 0) answer = [0, 0];
  return answer;
}