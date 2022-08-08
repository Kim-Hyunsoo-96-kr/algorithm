const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputArr = fs.readFileSync(filePath).toString().trim().split("\n");
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v1) {
    if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}
const numVertex = Number(inputArr.shift());
const numPath = Number(inputArr.shift());
// console.log(numPath);
let g = new Graph();
for (let i = 0; i < numPath; i++) {
  let [v1, v2] = inputArr[i].split(" ");
  g.addVertex(v1);
  g.addVertex(v2);
  g.addEdge(v1, v2);
  // console.log(g.adjacencyList);
}
// console.log(g.adjacencyList);
const visited = {};
let queue = ["1"];
while (queue.length !== 0) {
  let currentVertex = queue.shift();

  for (let x of g.adjacencyList[currentVertex]) {
    if (!visited[x]) {
      visited[x] = true;
      queue.push(x);
    }
  }
}
if (visited["1"]) delete visited["1"];
// console.log(visited);
console.log(Object.keys(visited).length);
