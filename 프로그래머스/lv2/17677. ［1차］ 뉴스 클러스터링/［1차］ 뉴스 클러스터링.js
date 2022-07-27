function solution(str1, str2) {
  // const regex = /[^a-z]/g;
  // console.log(str1.toLowerCase());
  // console.log(str2.toLowerCase());
  const set1 = depart(str1.toLowerCase());
  const set2 = depart(str2.toLowerCase());

  console.log(set1);
  console.log(set2);
  const intersection = {};
  const union = {};

  for (let x in set1) {
    union[x] = set1[x];
    while (set1[x] > 0) {
      set1[x]--;
      if (set2[x] !== undefined && set2[x] > 0) {
        if (intersection[x] === undefined) intersection[x] = 1;
        else intersection[x]++;
        set2[x]--;
      }
    }
  }
  for (let x in set2) {
    if (set2[x] > 0) {
      if (union[x] === undefined) union[x] = set2[x];
      else union[x] = union[x] + set2[x];
    }
  }
  let intersectionCount = 0;
  let unionCount = 0;
  for (let x in intersection) {
    intersectionCount += intersection[x];
  }
  for (let x in union) {
    unionCount += union[x];
  }
    if(unionCount === 0) return 65536;
  return Math.floor((intersectionCount / unionCount) * 65536);
}

function depart(str1) {
  let result = {};
  const regex = /[^a-z]/g;

  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i].replace(regex, '') === '' || str1[i + 1].replace(regex, '') === '') continue;
    if (result[str1[i] + str1[i + 1]] === undefined) result[str1[i] + str1[i + 1]] = 1;
    else result[str1[i] + str1[i + 1]]++;
  }
  return result;
}
