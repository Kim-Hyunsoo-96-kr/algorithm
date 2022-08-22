function solution(new_id) {
  let answer = '';
  // step1
  answer = new_id.toLowerCase();
  console.log('step 1 : ', answer);

  // step 2
  const regex2 = /[^a-z0-9-_.]/g;
  answer = answer.replace(regex2, '');
  console.log('step 2 : ', answer);

  // step 3
  const regex3 = /[.]{2,}/g;
  answer = answer.replace(regex3, '.');
  console.log('step 3 : ', answer);

  // step 4
  const regex4Front = /^[.]/;
  const regex4Back = /[.]$/;
  answer = answer.replace(regex4Front, '');
  console.log('step 4 : ', answer);
    answer = answer.replace(regex4Back, '');
  console.log('step 4 : ', answer);

  // step 5
  if (answer.length === 0) answer = 'a';
  console.log('step 5 : ', answer);

  // step 6
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    answer = answer.replace(regex4Back, '');
  }
  console.log('step 6 : ', answer);

  // step 7
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }
  console.log('step 7 : ', answer);
  
  return answer;
}
