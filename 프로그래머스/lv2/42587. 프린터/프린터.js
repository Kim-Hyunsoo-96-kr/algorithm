function solution(priorities, location) {
  var answer = 0;
  let print = priorities.map((el, idx) => {
    let tmp = {};
    tmp["priority"] = el;
    if (idx === location) tmp["mark"] = true;
    else tmp["mark"] = false;
    return tmp;
  });
  let index = 0;
  while (true) {
    let output = print.shift();
    if (checkPriority(print, output.priority)) {
      answer++;
      if (output.mark) return answer;
    } else {
      print.push(output);
    }
  }
}

function checkPriority(arr, priority) {
  for (let x of arr) {
    if (x.priority > priority) return false;
  }
  return true;
}