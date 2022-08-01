/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let star = new Graph();
    
    edges.forEach(el => {
        star.addVertex(el[0]);
        star.addVertex(el[1]);
        star.addEdge(el[0], el[1]);
    });
    console.log(star);
    for(let x in star.adjacencyList) {
        if(star.adjacencyList[x].length !== 1) return x;
    }
};

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}