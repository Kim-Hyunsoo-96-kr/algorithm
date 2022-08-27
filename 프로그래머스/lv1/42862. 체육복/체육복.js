function solution(n, lost, reserve) {
  let answer = 0;
  let student = new Array(n + 1).fill(1);

  for (let i = 0; i < lost.length; i++) {
    student[lost[i]]--;
  }
  for (let i = 0; i < reserve.length; i++) {
    student[reserve[i]]++;
  }

  for (let i = 1; i < student.length; i++) {
    if (student[i] === 0) {
      if (student[i - 1] === 2) {
        student[i]++;
        student[i - 1]--;
      } else if (student[i + 1] === 2) {
        student[i]++;
        student[i + 1]--;
      }
    }
  }

  student.forEach((el) => {
    if (el >= 1) answer++;
  });

  return answer - 1;
}