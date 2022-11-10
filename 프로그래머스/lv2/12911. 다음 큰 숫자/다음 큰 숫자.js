function solution(n) {
  let answer = 0;
  let bin = n.toString(2);
  let index = -1;

  // console.log(bin);
  for (let i = 0; i < bin.length - 1; i++) {
    if (bin[i] === "0" && bin[i + 1] === "1") {
      index = i;
    }
  }
  if (index === -1) {
    if (bin[bin.length - 1] === "0") {
      answer = bin[0] + "00" + bin.substring(1, bin.length - 1);
    } else {
      answer = bin[0] + "0" + bin.substring(1);
    }
  } else {
    if (bin[bin.length - 1] === "0") {
      answer = bin.substring(0, index) + "10" + change(bin.substring(index + 2));
    } else answer = bin.substring(0, index) + "10" + bin.substring(index + 2);
  }
  // console.log(answer);
  return parseInt(answer, 2);
}

function change(str) {
  let count = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") count++;
  }
  for (let i = count; i < str.length; i++) {
    result += "0";
  }
  for (let i = 0; i < count; i++) {
    result += "1";
  }
  return result;
}

