type IslandGrid = number[][]

const findIslands = (graph: IslandGrid) => {
  let islandCount = 0

  const dfs = (row: number, col: number) => {
    /**
     * We need to check for out-of-bounds values
     * 1. check to make sure that neither the row or the column are less than 0
     * 2. check to make sure that the row index is not greater than the graph length
     * 3. check to make sure that the col index is not greater than the row length
     */
    if (
      row < 0 ||
      row > graph.length - 1 ||
      col < 0 ||
      col > graph[row].length - 1 ||
      grid[row][col] === 0
    ) {
      return
    }

    grid[row][col] = 0

    const searches = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]
    searches.forEach(([r, c]) => dfs(r, c))
  }

  graph.forEach((row, rowIdx) =>
    row.forEach((col, colIdx) => {
      if (col === 1) {
        islandCount++
        dfs(rowIdx, colIdx)
      }
    })
  )

  return islandCount
}

const grid: IslandGrid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
]

export default () => console.log("Number of islands found", findIslands(grid))
