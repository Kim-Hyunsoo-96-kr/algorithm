function solution(enroll, referral, seller, amount) {
  let answer = [];
  const enrollInfo = {};
  const COST = 100;

  for (let i = 0; i < enroll.length; i++) {
    enrollInfo[enroll[i]] = { referral: referral[i], budget: 0 };
  }

  for (let i = 0; i < seller.length; i++) {
    calculate(enrollInfo, seller[i], amount[i] * COST);
  }
  enroll.forEach((el, idx) => {
    answer.push(enrollInfo[el].budget);
  });
  return answer;
}

function calculate(enrollInfo, seller, budget) {
  let currentSeller = seller;
  let currentBudget = budget;
  while (currentSeller !== '-') {
    if (currentBudget / 10 < 1) {
      enrollInfo[currentSeller].budget += currentBudget;
      break;
    } else {
      enrollInfo[currentSeller].budget += currentBudget - Math.floor(currentBudget * 0.1);
      currentBudget = Math.floor(currentBudget * 0.1);
      currentSeller = enrollInfo[currentSeller].referral;
    }
  }
}