function solution(A, B) {
  let answer = 0;
  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => a - b);

  let indexA = 0;
  let indexB = 0;

  while (indexB < B.length) {
    if (sortA[indexA] < sortB[indexB]) {
      answer++;
      indexA++;
      indexB++;
    } else {
      indexB++;
    }
  }

  return answer;
}