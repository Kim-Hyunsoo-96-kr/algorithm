function solution(line) {
  let answer = [];
  let points = [];
  let minX = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let point = intersection(line[i], line[j]);
      if (point !== undefined) {
        // console.log(point);
        points.push(point);
        if (point[0] < minX) minX = point[0];
        if (point[1] > maxY) maxY = point[1];
      }
    }
  }
  // console.log(points);
  for (let i = 0; i < points.length; i++) {
    points[i] = [points[i][0] - minX, points[i][1] - maxY];
  }
  // console.log(points);
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > maxX) maxX = points[i][0];
    if (points[i][1] < minY) minY = points[i][1];
  }
  // console.log(maxX, minY);
  for (let i = 0; i >= minY; i--) {
    let tmp = [];
    for (let j = 0; j <= maxX; j++) {
      tmp.push('.');
    }
    answer.push(tmp);
  }
  // console.log(answer);
  for (let i = 0; i < points.length; i++) {
    answer[-points[i][1]][points[i][0]] = '*';
  }
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].join('');
  }
  // console.log(answer);
  return answer;
}

function intersection(l1, l2) {
  let x = (l1[1] * l2[2] - l1[2] * l2[1]) / (l1[0] * l2[1] - l1[1] * l2[0]);
  let y = (l1[2] * l2[0] - l1[0] * l2[2]) / (l1[0] * l2[1] - l1[1] * l2[0]);
  // console.log(x, y);
  if (Number.isInteger(x) && Number.isInteger(y)) return [x, y];
}