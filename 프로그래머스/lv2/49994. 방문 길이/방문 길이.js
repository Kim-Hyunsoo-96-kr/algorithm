function solution(dirs) {
  const dirsArr = dirs.split('');
  let current = [0, 0];
  let next;
  const path = [];
  dirsArr.forEach((el) => {
    switch (el) {
      case 'L':
        if (current[0] === -5) break;
        next = [current[0] - 1, current[1]];
        path.push([...current, ...next]);
        current = next.slice(0);
        break;
      case 'R':
        if (current[0] === 5) break;
        next = [current[0] + 1, current[1]];
        path.push([...current, ...next]);
        current = next.slice(0);
        break;
      case 'U':
        if (current[1] === 5) break;
        next = [current[0], current[1] + 1];
        path.push([...current, ...next]);
        current = next.slice(0);
        break;
      case 'D':
        if (current[1] === -5) break;
        next = [current[0], current[1] - 1];
        path.push([...current, ...next]);
        current = next.slice(0);
        break;
    }
  });
  let filteredPath = path.filter((el, idx) => {
    return !isInclude(el, path, idx);
  });
  console.log(path);
  console.log(filteredPath);
  return filteredPath.length;
}
function isInclude(path, pathArr, idx) {
  for (let i = idx + 1; i < pathArr.length; i++) {
    if (isSame(path, pathArr[i])) return true;
  }
  return false;
}
function isSame(path1, path2) {
  if (path1[0] === path2[0] && path1[1] === path2[1] && path1[2] === path2[2] && path1[3] === path2[3]) return true;
  if (path1[0] === path2[2] && path1[1] === path2[3] && path1[2] === path2[0] && path1[3] === path2[1]) return true;
  return false;
}