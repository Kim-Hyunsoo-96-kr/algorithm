function solution(topping) {
  let answer = 0;
  const leftTopping = {};
  const rightTopping = {};

  topping.forEach((el) => {
    if (!rightTopping[el]) rightTopping[el] = 1;
    else rightTopping[el]++;
  });

  let leftToppingCount = 0;
  let rightToppingCount = Object.keys(rightTopping).length;

  
  for (let i = 0; i < topping.length; i++) {
    let el = topping[i];
    rightTopping[el]--;
    if (rightTopping[el] === 0) rightToppingCount--;

    if (!leftTopping[el]) {
      leftToppingCount++;
      leftTopping[el] = 1;
    }

    if (leftToppingCount === rightToppingCount) answer++;
    if (leftToppingCount > rightToppingCount) break;
  }
  return answer;
}
