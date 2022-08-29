function solution(N, stages) {
  let answer = [];
  let stageObj = {};
  let playerNum = stages.length;

  for (let i = 0; i < stages.length; i++) {
    if (!stageObj[stages[i]]) stageObj[stages[i]] = 1;
    else stageObj[stages[i]]++;
  }

  let player = new Array(N + 2).fill(0);

  for (let i = 1; i < player.length; i++) {
    if (stageObj[i]) player[i] = stageObj[i];
  }

  let failRate = new Array(N + 2).fill(0);
  for (let i = 1; i < player.length; i++) {
    failRate[i] = { index: i, failRate: player[i] / playerNum };
    playerNum -= player[i];
  }

  failRate = failRate.slice(1, N + 1);

  failRate = failRate.sort((a, b) => b.failRate - a.failRate);

  failRate.forEach((el) => {
    answer.push(el.index);
  });
  return answer;
}