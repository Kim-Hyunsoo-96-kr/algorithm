function solution(m, n, board) {
  var answer = 0;
  const map = [];
  const removeStack = [];

  // initialize
  for (let i = 0; i < n; i++) {
    let stack = [];
    for (let j = m - 1; j >= 0; j--) {
      stack.push(board[j][i]);
    }
    map.push(stack);
  }

  while (true) {
    // find point
    for (let j = 0; j < n - 1; j++) {
      for (let i = 0; i < map[j].length - 1; i++) {
        if (map[j][i] === map[j + 1][i] && map[j][i] === map[j][i + 1] && map[j][i] === map[j + 1][i + 1]) {
          removeStack.push([j, i]);
        }
      }
    }
    if (removeStack.length === 0) break;
    // remove point
    while (removeStack.length !== 0) {
      let [j, i] = removeStack.pop();
      map[j][i] = '';
      map[j][i + 1] = '';
      map[j + 1][i] = '';
      map[j + 1][i + 1] = '';
    }
    for (let i = 0; i < n; i++) {
      map[i] = map[i].join('').split('');
    }
  }

  // console.log(map);
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      count++;
    }
  }
  return m * n - count;
}