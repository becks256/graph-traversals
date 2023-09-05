// Acceptance Criteria
// Function should return the minimum number of steps needed to collect all items.
// Assume you always start at 'Entrance' and end at 'Entrance' ('Checkout' is in the same place).
// If an item in the list is not in the store, the function should return null.

// class Queue {
//   queue?: [string, number, string[]]
//   visited: Set<string>;
//   currentItem?: string;
//   distance?: number;
//   collectedItemsSoFar: string[]
//   enqueue: (item: [string, number, string[]]) => void
//   dequeue: (item: string) => [string, number, string[]]
//   constructor() {
//     this.queue;
//     this.visited = new Set()
//     this.currentItem;
//     this.distance;
//     this.collectedItemsSoFar = []
//     this.enqueue = (item) => {
//       this.queue.push(item)
//     }
//     this.dequeue = (item) => {
//       this.visited.add(item[0])
//       this.queue.pop()!
//   }
// }

type Coords = [number, number]

interface QueueItem {
  name: string
  steps: number
  coords: Coords
}

const omniDirectionalScan = (
  coords: Coords,
  graph: string[][],
  currentSteps: number
) => {
  const [currentRow, currentCell] = coords
  let up = currentRow + 1
  let right = currentCell + 1
  let down = currentRow - 1
  let left = currentCell - 1

  let queue: QueueItem[] = []

  let steps = currentSteps + 1

  up < graph.length &&
    queue.push({
      name: graph[up][currentCell],
      steps,
      coords: [up, currentCell],
    })

  right < graph[currentRow].length &&
    queue.push({
      name: graph[currentRow][right],
      steps,
      coords: [currentRow, right],
    })

  left > -1 &&
    queue.push({
      name: graph[currentRow][left],
      steps,
      coords: [currentRow, left],
    })

  down > -1 &&
    queue.push({
      name: graph[down][currentCell],
      steps,
      coords: [down, currentCell],
    })

  return queue
}

const shortestPathToCollectItems = (
  storeLayout: string[][],
  shoppingList: string[]
): any => {
  let queue: QueueItem[] = []
  let collection = new Set<QueueItem>()
  let visited = new Set<string>()

  const enqueue = ({ name, steps, coords }: QueueItem) => {
    queue.push({ name, steps, coords })
  }

  const dequeue = () => {
    return queue.shift()!
  }

  enqueue({ name: "Entrance", steps: 0, coords: [0, 0] })

  while (queue.length) {
    const currentItem = dequeue()
    if (visited.has(currentItem.coords.toString())) {
      continue
    }
    visited.add(currentItem.coords.toString())

    if (
      currentItem.name === "Entrance" ||
      shoppingList.find((listItem) => currentItem.name === listItem)
    ) {
      collection.add(currentItem)
      const results = omniDirectionalScan(
        currentItem.coords,
        storeLayout,
        currentItem.steps
      )
      results.forEach((result) => {
        if (!visited.has(result.coords.toString())) {
          enqueue(result)
        }
      })
    }
  }

  return [...collection]
}

const storeLayout = [
  ["Entrance", "Grocery", "Clothing"],
  ["Toys", "Electronics", "Home"],
  ["Sports", "Outdoor", "Automotive"],
]

const shoppingList = ["Grocery", "Electronics", "Outdoor"]

export default () => {
  console.log(
    "Shortest path to collect",
    shoppingList.join(", "),
    shortestPathToCollectItems(storeLayout, shoppingList)
  ) // Output should be number of steps
}
