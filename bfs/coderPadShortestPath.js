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

  // Implement findShortestPath here
  findShortestPath(start, end) {
    let queue = [{node: start, path: [start]}]
    let visited = new Set()

    while (queue.length > 0) {
      const { node, path } = queue.shift();
      if (node === end) {
        return path;
      }
      
      if (!visited.has(node)) {
        visited.add(node)
        const neighbors = this.adjacencyList[node] || []

        for (let neighbor of neighbors) {
          if(!visited.has(neighbor)) {
            queue.push({node: neighbor, path: [...path, neighbor]})
          }
        }
      }
    }
    return null
  }
}

// Test your implementation
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log(graph.findShortestPath('A', 'E'));  // Should return the shortest path from 'A' to 'E' as an array