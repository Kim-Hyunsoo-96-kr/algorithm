function solution(n, stations, w) {
  let answer = 0;

  const nonReach = [];

  for (let i = 0; i <= stations.length; i++) {
    let length = 0;

    switch (i) {
      case 0:
        length = stations[i] - 1 - w;
        break;
      case stations.length:
        length = n - stations[i - 1] - w;
        break;
      default:
        length = stations[i] - w - (stations[i - 1] + w) - 1;
    }
    if (length <= 0) continue;
    else nonReach.push(length);
  }
  console.log(nonReach);

  nonReach.forEach((el) => {
    answer += Math.ceil(el / (2 * w + 1));
  });
  return answer;
}