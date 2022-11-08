function solution(maps) {
  let answer = 0;
  const ROW = maps.length - 1;
  const COL = maps[0].length - 1;

  let queue = [[0, 0]];

  while (queue.length > 0) {
    let preLength = queue.length;
    answer++;
    while (preLength !== 0) {
      let [curRow, curCol] = queue.shift();
      if (curRow === ROW && curCol === COL) return answer;
      preLength--;
      if (curRow + 1 >= 0 && curRow + 1 <= ROW && curCol >= 0 && curCol <= COL && maps[curRow + 1][curCol] === 1) {
        queue.push([curRow + 1, curCol]);
        maps[curRow + 1][curCol] = 0;
      }
      if (curRow - 1 >= 0 && curRow - 1 <= ROW && curCol >= 0 && curCol <= COL && maps[curRow - 1][curCol] === 1) {
        queue.push([curRow - 1, curCol]);
        maps[curRow - 1][curCol] = 0;
      }
      if (curRow >= 0 && curRow <= ROW && curCol + 1 >= 0 && curCol + 1 <= COL && maps[curRow][curCol + 1] === 1) {
        queue.push([curRow, curCol + 1]);
        maps[curRow][curCol + 1] = 0;
      }
      if (curRow >= 0 && curRow <= ROW && curCol - 1 >= 0 && curCol - 1 <= COL && maps[curRow][curCol - 1] === 1) {
        queue.push([curRow, curCol - 1]);
        maps[curRow][curCol - 1] = 0;
      }
    }
  }
  return -1;
}