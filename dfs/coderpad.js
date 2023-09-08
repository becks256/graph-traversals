class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // Implement DFS here
  depthFirstSearch(start, visited = new Set()) {
    visited.add(start)

    const neighbors = this.adjacencyList[start]
    for (let neighbor of neighbors) {
      !visited.has(neighbor) && this.depthFirstSearch(neighbor, visited)
    }
    return Array.from(visited)
  }
}

// Test your implementation
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log(graph.depthFirstSearch('A'));  // Should return an array of nodes visited using DFS starting from 'A'