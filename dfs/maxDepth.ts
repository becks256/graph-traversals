class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const generateRandomTree = () => {
  let val = Math.round(Math.random() * (Math.random() * 100))
  return new TreeNode(val < 1 ? val + 1 : val)
}
const root = generateRandomTree()
root.left = generateRandomTree()
root.right = generateRandomTree()
root.right.left = generateRandomTree()
root.right.right = generateRandomTree()
root.right.left.left = generateRandomTree()
root.right.left.left.left = generateRandomTree()
root.right.left.left.right = generateRandomTree()

const dfs = (node: TreeNode | null, depth: number): number => {
  if (!node) {
    return depth
  }

  depth += 1
  
  const depthLeft = dfs(node.left, depth)
  const depthRight = dfs(node.right, depth)

  return Math.max(depthLeft, depthRight)
}

console.log(dfs(root, 0))
