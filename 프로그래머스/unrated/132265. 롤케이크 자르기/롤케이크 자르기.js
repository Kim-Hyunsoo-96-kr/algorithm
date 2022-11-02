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
  // console.log(toppingInfo);

  // topping.forEach((el, idx) => {
  //   if (!leftTopping[el]) leftTopping[el] = 1;
  //   else leftTopping[el]++;

  //   if (rightTopping[el] === 1) delete rightTopping[el];
  //   else rightTopping[el]--;

  //   if (Object.keys(leftTopping).length === Object.keys(rightTopping).length) answer++;
  // });

  topping.forEach((el) => {
    rightTopping[el]--;
    if (rightTopping[el] === 0) rightToppingCount--;

    if (!leftTopping[el]) {
      leftToppingCount++;
      leftTopping[el] = 1;
    }

    if (leftToppingCount === rightToppingCount) answer++;
    if (leftToppingCount > rightToppingCount) return false;
  });
  return answer;
}
