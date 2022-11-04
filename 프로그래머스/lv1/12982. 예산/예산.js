function solution(d, budget) {
  let answer = 0;
  let restBudget = budget;
  const sortedD = d.sort((a, b) => a - b);

  for (let i = 0; i < sortedD.length; i++) {
    if (restBudget - sortedD[i] >= 0) {
      answer++;
      restBudget -= sortedD[i];
    } else break;
  }
  return answer;
}
