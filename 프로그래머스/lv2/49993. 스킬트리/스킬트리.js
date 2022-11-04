function solution(skill, skill_trees) {
  let answer = 0;
  const skillArr = skill.split('');

  skill_trees.forEach((el) => {
    let skillOrder = findSkillOrder(skillArr, el);
    if (isPossible(skillOrder)) {
      answer++;
    } else return;
  });

  return answer;
}

function findSkillOrder(skill, skill_tree) {
  let tmp = [];
  skill.forEach((el) => {
    tmp.push(skill_tree.indexOf(el));
  });
  return tmp;
}

function isPossible(skillOrder) {
  let answer = true;
  loop1: for (let i = 0; i < skillOrder.length - 1; i++) {
    if ((skillOrder[i] === -1 && skillOrder[i + 1] !== -1) || (skillOrder[i + 1] !== -1 && skillOrder[i] > skillOrder[i + 1])) {
      answer = false;
      break loop1;
    } else {
    }
  }
  return answer;
}
