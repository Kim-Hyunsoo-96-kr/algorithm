function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const bridge = new Array(bridge_length).fill(0);

  while (bridge.length !== 0) {
    answer++;
    bridge.shift();

    if (truck_weights.length !== 0) {
      let rest = weight - sum(bridge);
      let input = 0;
      if (rest >= truck_weights[0]) {
        input = truck_weights[0];
        truck_weights.shift();
      }
      bridge.push(input);
    }
    // console.log(bridge);
  }
  return answer;
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}