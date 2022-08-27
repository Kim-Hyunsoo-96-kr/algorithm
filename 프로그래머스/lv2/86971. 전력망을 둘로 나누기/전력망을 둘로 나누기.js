function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let links = {};

  for (let i = 0; i < wires.length; i++) {
    let [v1, v2] = wires[i];

    if (!links[v1]) links[v1] = [v2];
    else links[v1].push(v2);

    if (!links[v2]) links[v2] = [v1];
    else links[v2].push(v1);
  }
  // console.log(links);

  for (let i = 0; i < wires.length; i++) {
    let tmplinks = JSON.parse(JSON.stringify(links));
    let [v1, v2] = wires[i];
    tmplinks[v1].splice(tmplinks[v1].indexOf(v2), 1);
    tmplinks[v2].splice(tmplinks[v2].indexOf(v1), 1);
    console.log(v1, v2, tmplinks);
    let count1 = count(v1, tmplinks);
    let count2 = count(v2, tmplinks);
    if (Math.abs(count1 - count2) < answer) answer = Math.abs(count1 - count2);
  }
  return answer;
}

function count(node, links) {
  let count = 0;
  let queue = [node];

  while (queue.length !== 0) {
    let v = queue.shift();
    for (let i = 0; i < links[v].length; i++) {
      let tmpArr = links[links[v][i]];
      tmpArr.splice(tmpArr.indexOf(Number(v)), 1);
      links[links[v][i]] = tmpArr;
      queue.push(links[v][i]);
      count++;
    }
    // console.log(v, links, count);
  }
  return count;
}
