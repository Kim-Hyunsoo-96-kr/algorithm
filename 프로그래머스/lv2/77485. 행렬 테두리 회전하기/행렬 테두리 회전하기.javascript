function solution(rows, cols, queries) {
  let answer = [];
  let mat = matrixInitilaize(rows, cols);

  for (let i = 0; i < queries.length; i++) {
    answer.push(spin(mat, queries[i]));
  }
  console.log(answer);
  return answer;
}

function spin(mat, query) {
  let [x1, y1, x2, y2] = query;
  let tmpNum = mat[x1 - 1][y1 - 1];
  let changeNum = [];

  for (let i = y1 - 1; i <= y2 - 1; i++) {
    [tmpNum, mat[x1 - 1][i]] = [mat[x1 - 1][i], tmpNum];
    changeNum.push(tmpNum);
  }
  for (let i = x1; i <= x2 - 1; i++) {
    [tmpNum, mat[i][y2 - 1]] = [mat[i][y2 - 1], tmpNum];
    changeNum.push(tmpNum);
  }
  for (let i = y2 - 2; i >= y1 - 1; i--) {
    [tmpNum, mat[x2 - 1][i]] = [mat[x2 - 1][i], tmpNum];
    changeNum.push(tmpNum);
  }
  for (let i = x2 - 2; i >= x1 - 1; i--) {
    [tmpNum, mat[i][y1 - 1]] = [mat[i][y1 - 1], tmpNum];
    changeNum.push(tmpNum);
  }
  return Math.min(...changeNum);
}

function matrixInitilaize(rows, cols) {
  let result = [];

  for (let i = 0; i < rows; i++) {
    let tmp = [];
    for (let j = 1; j <= cols; j++) {
      tmp.push(i * cols + j);
    }
    result.push(tmp);
  }
  return result;
}