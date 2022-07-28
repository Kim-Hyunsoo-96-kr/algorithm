function solution(s) {
  var answer = [];
  const sArr = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((el) => el.split(","))
    .sort((a, b) => a.length - b.length)
    .map((el) => {
      let tmp = {};
      el.forEach((e) => {
        tmp[e] = true;
      });
      return tmp;
    });
  for (let i = 0; i < sArr.length; i++) {
    for (let x in sArr[i]) {
      if (sArr[i][x]) {
        answer.push(Number(x));
        for (let j = i; j < sArr.length; j++) {
          sArr[j][x] = false;
        }
      }
    }
  }
  return answer;
}