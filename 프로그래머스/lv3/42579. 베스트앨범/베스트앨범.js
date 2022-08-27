function solution(genres, plays) {
  let answer = [];

  let data = {};

  for (let i = 0; i < genres.length; i++) {
    if (!data[genres[i]]) data[genres[i]] = { count: plays[i], most1: plays[i], most2: null, plays: [{ index: i, plays: plays[i] }] };
    else {
      data[genres[i]].count += plays[i];
      data[genres[i]].plays.push({ index: i, plays: plays[i] });
      if (!data[genres[i]].most2) {
        if (data[genres[i]].most1 < plays[i]) {
          data[genres[i]].most2 = data[genres[i]].most1;
          data[genres[i]].most1 = plays[i];
        } else data[genres[i]].most2 = plays[i];
      } else {
        if (plays[i] > data[genres[i]].most1) {
          data[genres[i]].most2 = data[genres[i]].most1;
          data[genres[i]].most1 = plays[i];
        } else if (plays[i] > data[genres[i]].most2) data[genres[i]].most2 = plays[i];
      }
    }
  }
  console.log(data);
  let data2 = Object.entries(data).sort((a, b) => b[1].count - a[1].count);

  console.log(data2);

  for (let x of data2) {
    let tmp = [];
    x[1].plays.forEach((el) => {
      if (el.plays === x[1].most1) tmp.push(el.index);
    });
    x[1].plays.forEach((el) => {
      if (el.plays === x[1].most2) tmp.push(el.index);
    });
    answer = answer.concat(tmp.slice(0, 2));
  }
  console.log(answer);
  return answer;
}