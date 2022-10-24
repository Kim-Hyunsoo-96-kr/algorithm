function solution(A, B) {
  let answer = 0;

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  A.forEach((el, idx) => {
    answer += el * B[idx];
  });
  return answer;
}