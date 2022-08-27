function solution(sizes) {
  var answer = 0;
  let wh = [0, 0];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      if (sizes[i][0] > wh[0]) wh[0] = sizes[i][0];
      if (sizes[i][1] > wh[1]) wh[1] = sizes[i][1];
    } else {
      if (sizes[i][1] > wh[0]) wh[0] = sizes[i][1];
      if (sizes[i][0] > wh[1]) wh[1] = sizes[i][0];
    }
  }
  answer = wh[0] * wh[1];
  return answer;
}