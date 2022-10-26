function solution(id_list, report, k) {
  const answer = [];
  const mailCount = {};
  const reportCount = {};
  const reportUser = {};
  const banUser = [];

  id_list.forEach((el) => {
    mailCount[el] = 0;
    reportCount[el] = 0;
    reportUser[el] = [];
  });

  report.forEach((el) => {
    let [report, reported] = el.split(' ');
    if (!reportUser[report].includes(reported)) {
      reportUser[report].push(reported);
      reportCount[reported]++;
    }
  });

  for (let key in reportCount) {
    if (reportCount[key] >= k) banUser.push(key);
  }

  for (let key in reportUser) {
    banUser.forEach((el) => {
      if (reportUser[key].includes(el)) mailCount[key]++;
    });
  }
  // console.log(reportCount);
  // console.log(reportUser);
  id_list.forEach((el) => {
    answer.push(mailCount[el]);
  });
  return answer;
}