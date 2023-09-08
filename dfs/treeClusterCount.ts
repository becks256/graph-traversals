type Forest = string[][]

const findTreeClusters = (forest: Forest) => {
  let treeClusterCount = 0

  const dfs = (row: number, col: number) => {
    /**
     * We need to check for out-of-bounds values
     * 1. check to make sure that neither the row or the column are less than 0
     * 2. check to make sure that the row index is not greater than the graph length
     * 3. check to make sure that the col index is not greater than the row length
     */
    if (
      row < 0 ||
      row > forest.length - 1 ||
      col < 0 ||
      col > forest[row].length - 1 ||
      forest[row][col] === "O"
    ) {
      return
    }

    forest[row][col] = "O"

    const searches = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
      [row - 1, col + 1],
      [row + 1, col - 1],
      [row + 1, col + 1],
      [row - 1, col - 1],
    ]
    searches.forEach(([r, c]) => dfs(r, c))
  }

  forest.forEach((row, rowIdx) =>
    row.forEach((col, colIdx) => {
      if (col === "X") {
        treeClusterCount++
        dfs(rowIdx, colIdx)
      }
    })
  )

  return treeClusterCount
}

const forest: Forest = [
  ['X', 'O', 'X', 'X', 'O'],
  ['O', 'X', 'O', 'X', 'O'],
  ['X', 'O', 'X', 'O', 'X'],
  ['O', 'X', 'O', 'X', 'O'],
  ['X', 'O', 'X', 'O', 'X']
];

export default () => console.log("Number of tree clusters found", findTreeClusters(forest))
