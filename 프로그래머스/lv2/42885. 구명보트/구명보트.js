function solution(people, limit) {
  let answer = 0;
  let sortedPeople = people.sort((a, b) => a - b);
  console.log(sortedPeople);

  while (sortedPeople.length !== 0) {
    let boat = limit - sortedPeople.pop();
    while (sortedPeople[0] && boat - sortedPeople[0] >= 0) {
      boat -= sortedPeople.shift();
    }
    answer++;
  }
  return answer;
}