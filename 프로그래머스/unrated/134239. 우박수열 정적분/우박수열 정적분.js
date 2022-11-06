function solution(k, ranges) {
  let answer = [];
  let collatzNum = k;
  const collatzSeries = [];

  loop1: for (let i = 0; i < 200; i++) {
    collatzSeries.push(collatzNum);
    switch (true) {
      case collatzNum === 1:
        break loop1;
      case collatzNum % 2 === 0:
        collatzNum /= 2;
        break;
      default:
        collatzNum = collatzNum * 3 + 1;
    }
  }
  const collatzSeriesIndex = collatzSeries.length - 1;

  ranges.forEach((el) => {
    let [a, b] = el;
    let result = 0.0;
    if (a > collatzSeriesIndex || -1 * b > collatzSeriesIndex || collatzSeriesIndex + b < a) answer.push(-1);
    else {
      while (a < collatzSeriesIndex + b) {
        result += (collatzSeries[a] + collatzSeries[a + 1]) * 0.5;
        a++;
      }
      answer.push(result);
    }
  });
  console.log(collatzSeries);
  return answer;
}