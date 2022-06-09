function solution(p) {
  if (p.length === 0) return "";

  // let answer = "";

  let [u, v] = decompose(p);

  if (isComplete(u)) return u + solution(v);
  else {
    let tmpStr = solution(v);
    u = u.slice(1, u.length - 1);
    u = flip(u);
    return `(${tmpStr})${u}`;
  }
}

function flip(str) {
  let result = "";

  for (let x of str) {
    if (x === "(") result += ")";
    else result += "(";
  }
  return result;
}

function isComplete(str) {
  let arr = str.split("");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) stack.push(arr[i]);
    else {
      if (str[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
      else stack.push(arr[i]);
    }
  }
  if (stack.length === 0) return true;
  else return false;
}

function decompose(str) {
  if (str.length === 0) return ["", ""];

  let openCount = 0;
  let closeCount = 0;
  let u = "";
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    u += str[i];
    if (str[i] === "(") openCount++;
    else closeCount++;

    if (openCount === closeCount) {
      index = ++i;
      break;
    }
  }
  v = str.slice(index);

  return [u, v];
}
