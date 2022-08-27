function solution(citations) {
  var answer = 0;
  const sortedPaper = citations.sort((a, b) => b - a);
    // console.log(sortedPaper);
  for (let i = 0; i < sortedPaper.length; i++) {
    if (i + 1 > sortedPaper[i]) {
      answer = i;
      break;
    }
    if(i === sortedPaper.length-1) answer = i+1;
  }
  return answer;
}