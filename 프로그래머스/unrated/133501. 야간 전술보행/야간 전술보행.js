function solution(distance, scope, times) {
  let answer = 0;
  let time = 0;
  const progress = new Array(distance + 1).fill(null);
  scope.forEach((el, idx) => {
    let [a, b] = el.sort((a, b) => a - b);
    for (let i = a; i <= b; i++) {
      progress[i] = idx;
    }
  });
  loop1: for (let i = 1; i <= distance; i++) {
    time++;
    if (progress[time] === null);
    else {
      let [a, b] = times[progress[time]];
      if (time % (a + b) > a || time % (a + b) === 0);
      else break loop1;
    }
  }
  answer = time;
  return time;
}
