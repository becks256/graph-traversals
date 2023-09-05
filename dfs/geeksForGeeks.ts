// You are given a connected undirected graph. Perform a Depth First Traversal of the graph.
// Note: Use the recursive approach to find the DFS traversal of the graph starting from the 0th vertex from left to right according to the graph.

// Example 1:

// Input: V = 5 , adj = [[2,3,1] , [0], [0,4], [0], [2]]

// Output: 0 2 4 3 1
// Explanation:
// 0 is connected to 2, 3, 1.
// 1 is connected to 0.
// 2 is connected to 0 and 4.
// 3 is connected to 0.
// 4 is connected to 2.
// so starting from 0, it will go to 2 then 4,
// and then 3 and 1.
// Thus dfs will be 0 2 4 3 1.
class Solution {
  dfsOfGraph(V: number, adj: number[][]): number[] {
    // code here
    let visited = new Array(V).fill(false)
    let result: number[] = []
    this.dfs(0, adj, visited, result)
    return result
  }
  /**
   *
   * @param node
   * @param adj
   * @param visited
   * @param result
   * @returns
   * @description
   * 1. Mark the current node as visited and print the node.
   * 2. Traverse all the adjacent and unmarked nodes and call the recursive function with index of adjacent node.
   * 3. If the adjacent node is already visited or it is a null node, then backtrack and return.
   **/
  dfs(node: number, adj: number[][], visited: boolean[], result: number[]) {
    visited[node] = true
    result.push(node)
    for (let i = 0; i < adj[node].length; i++) {
      if (!visited[adj[node][i]]) {
        this.dfs(adj[node][i], adj, visited, result)
      }
    }
  }
}

export default () =>
  console.log("GeeksForGeeks solution:", new Solution().dfsOfGraph(5, [[2, 3, 1], [0], [0, 4], [0], [2]]))
