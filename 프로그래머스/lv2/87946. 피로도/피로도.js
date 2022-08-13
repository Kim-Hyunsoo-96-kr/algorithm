function solution(k, dungeons) {
  var answer = 0;
  let rest = k;
  let length = dungeons.length;
  function helper(rest, count, dungeons) {
    if (answer < count) answer = count;
    if (count === length) return;
    else {
      for (let i = 0; i < dungeons.length; i++) {
        if (rest >= dungeons[i][0]) {
          helper(rest - dungeons[i][1], count + 1, [...dungeons.slice(0, i), ...dungeons.slice(i + 1)]);
        }
      }
    }
  }

  helper(rest, 0, dungeons);
  return answer;
}