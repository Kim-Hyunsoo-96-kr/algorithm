function solution(survey, choices) {
  var answer = '';
  let person = { RT: 0, CF: 0, JM: 0, AN: 0 };

  survey.forEach((el, idx) => {
    if (el === 'TR' || el === 'FC' || el === 'MJ' || el === 'NA') {
      survey[idx] = el[1] + el[0];
      choices[idx] = 8 - choices[idx];
    }
  });
  choices = choices.map((el) => el - 4);
  survey.forEach((el, idx) => {
    person[el] -= choices[idx];
  });

  person.RT < 0 ? (answer += 'T') : (answer += 'R');
  person.CF < 0 ? (answer += 'F') : (answer += 'C');
  person.JM < 0 ? (answer += 'M') : (answer += 'J');
  person.AN < 0 ? (answer += 'N') : (answer += 'A');
  return answer;
}
