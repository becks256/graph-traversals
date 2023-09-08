class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Implement the recursive tree traversals here
function inOrderTraversal(root, result = []) {
  // Your code here
  if (!root) {
    return result
  }


  inOrderTraversal(root.left, result)
  result.push(root.value)
  inOrderTraversal(root.right, result)

  return result
}

function preOrderTraversal(root, result = []) {
  // Your code here
  if (!root) {
    return result
  }

  result.push(root.value)
  preOrderTraversal(root.left, result)
  preOrderTraversal(root.right, result)

  return result
}

function postOrderTraversal(root, result = []) {
  // Your code here
  if (!root) {
    return result
  }

  postOrderTraversal(root.left, result)
  postOrderTraversal(root.right, result)
  result.push(root.value)

  return result
}

// Test your implementation
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(inOrderTraversal(root));  // Should return [4, 2, 5, 1, 3]
console.log(preOrderTraversal(root));  // Should return [1, 2, 4, 5, 3]
console.log(postOrderTraversal(root));  // Should return [4, 5, 2, 3, 1]