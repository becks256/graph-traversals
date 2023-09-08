type Graph = string[][]

// const wordSearch = (graph: Graph, word: string) => {
//   let wordArr = word.split("")
//   let i = 1
//   let foundNodes: number[][] = []
//   let match: string[] = []

//   // the recursive part needs to take in a row and a col and we need to check next to each one, any time we find a match, we need to look around it.
//   const search = (row: number, col: number, arr: string[]): any => {
//     if (
//       row < 0 ||
//       row > graph.length - 1 ||
//       col < 0 ||
//       col > graph[row].length - 1
//     ) {
//       return
//     }
//     if (graph[row][col] === arr[i] && i < arr.length) {
//       i++
//       match.push(graph[row][col])
//     }

//     const searches = [
//       [row + 1, col], // right
//       [row - 1, col], // left
//       [row, col + 1], // forward
//       [row, col - 1], // back
//     ]

//     searches.forEach(([r, c]) => search(r, c, arr))
//   }

//   // scan through the graph, then
//   // when we find a letter that matches the first letter of our word,
//   // look around it to see if we can find the next letter

//   graph.forEach((row, rowIdx) =>
//     row.forEach((col, colIdx) => {
//       if (col === wordArr[0]) {
//         foundNodes.push([rowIdx, colIdx])
//       }
//     })
//   )

//   foundNodes.forEach(([row, col]) => {
//     match.push(graph[row][col])
//     search(row, col, wordArr)
//     console.log(match)
//   })

//   // return islandCount
// }

const wordSearch = (graph: Graph, word: string) => {
  // find the first letter, then look at its nearest neighbors to see if it can make the full word.
  const queue = word.split("")

  const dfs = (row: number, col: number) => {
    if (
      row < 0 ||
      col < 0 ||
      row > graph.length - 1 ||
      col > graph[row].length - 1
    ) {
      return
    }
  }
}

const board: Graph = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]

const words: string[] = ["SEE", "ABC", "HELLO"]

export default () =>
  console.log("SEE", "was found in board?", wordSearch(board, "SEE"))
// words.forEach((word) =>
//   console.log(word, "was found in board?", wordSearch(board, word))
// )
