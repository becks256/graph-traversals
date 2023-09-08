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

  /**
   * Perform a breadth-first search from a start vertex.
   * @param {string} start - The start vertex.
   * @returns {Array} An array of vertices visited during the BFS.
   */
  breadthFirstSearch(start) {
    if (!this.adjacencyList[start]) {
      throw new Error('Start vertex not found in graph');
    }

    const queue = [start];
    const visited = new Set([start]);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      const neighbors = this.adjacencyList[currentNode] || [];

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return Array.from(visited);
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

console.log(graph.breadthFirstSearch('D'));  // Should return an array of 