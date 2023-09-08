interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

const hasPathSum = (node: TreeNode | null, sum: number): boolean => {
  if (!node) {
    return false
  }

  sum -= node.val

  if (!node.left && !node.right) {
    return sum === 0
  }

  return hasPathSum(node.left, sum) || hasPathSum(node.right, sum)

}

const root: TreeNode = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
}

export default () => {
  const targetSum = 18
  console.log(`Tree has path sum to ${targetSum}`, hasPathSum(root, targetSum))}
