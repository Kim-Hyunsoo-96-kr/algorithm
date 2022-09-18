function solution(fees, records) {
  var answer = [];
  let parking = {};
  let carInfo = {};

  records.forEach((el) => {
    let elArr = el.split(' ');
    if (carInfo[elArr[1]] === undefined) carInfo[elArr[1]] = 0;

    if (parking[elArr[1]] === undefined) {
      parking[elArr[1]] = convertMin(elArr[0]);
    } else {
      carInfo[elArr[1]] = carInfo[elArr[1]] + convertMin(elArr[0]) - parking[elArr[1]];
      parking[elArr[1]] = undefined;
    }
  });
  for (let x in parking) {
    if (parking[x] !== undefined) {
      carInfo[x] = carInfo[x] + convertMin('23:59') - parking[x];
    }
  }

  console.log(carInfo);
  for (let x in carInfo) {
    answer.push(x);
  }

  answer.sort((a, b) => a - b);
  answer = answer.map((el) => calculateFee(carInfo[el], fees));
  return answer;
}


function convertMin(timeStr) {
  let result = 0;
  let time = timeStr.split(':').map((el) => Number(el));
  result = time[0] * 60 + time[1];

  return result;
}

function calculateFee(time, fee) {
  let result = fee[1];
  if (time <= fee[0]) return result;
  else {
    result += Math.ceil((time - fee[0]) / fee[2]) * fee[3];
  }
  return result;
}