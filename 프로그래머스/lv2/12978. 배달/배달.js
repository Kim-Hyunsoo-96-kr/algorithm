function solution(N, road, K) {
  var answer = {};
  const adjacencyMatrix = [];
  for (let i = 0; i <= N; i++) {
    adjacencyMatrix.push(Array(N + 1).fill(null));
  }

  for (let i = 0; i < road.length; i++) {
    let [v1, v2, distance] = road[i];
    if (adjacencyMatrix[v1][v2] === null) {
      adjacencyMatrix[v1][v2] = distance;
      adjacencyMatrix[v2][v1] = distance;
    } else {
      if (distance < adjacencyMatrix[v1][v2]) {
        adjacencyMatrix[v2][v1] = distance;
        adjacencyMatrix[v1][v2] = distance;
      }
    }
  }
  // console.log(adjacencyMatrix);
  const queue = [{ vertex: 1, distance: 0 }];

  while (queue.length !== 0) {
    let length = queue.length;
    // console.log(queue);
    for (let i = 0; i < length; i++) {
      let currentVertex = queue.shift();
      if (currentVertex.distance <= K) {
        answer[currentVertex.vertex] = currentVertex.distance;
        for (let j = 1; j <= N; j++) {
          if (j !== currentVertex.vertex && adjacencyMatrix[currentVertex.vertex][j] !== null) {
            if (answer[j] === undefined || answer[j] > currentVertex.distance + adjacencyMatrix[currentVertex.vertex][j]) queue.push({ vertex: j, distance: currentVertex.distance + adjacencyMatrix[currentVertex.vertex][j] });
          }
        }
      }
    }
  }

  return Object.keys(answer).length;
  // return answer;
}