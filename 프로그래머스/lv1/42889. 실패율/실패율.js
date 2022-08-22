function solution(N, stages) {
  let answer = [];
  let players = {};
  let playersNum = stages.length;

  for (let i = 0; i < stages.length; i++) {
    if (!players[stages[i]]) players[stages[i]] = 1;
    else players[stages[i]]++;
  }
  // console.log(players);

  for (let i = 1; i <= N; i++) {
    if (players[i]) {
      let failRate = players[i] / playersNum;
      playersNum -= players[i];
      answer.push([i, failRate]);
    } else answer.push([i, 0]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  answer = answer.map((el) => el[0]);
  // console.log(answer);
  return answer;
}