var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null
  // Only change code below this line
  this.inorder = (root = this.root, result = []) => {
    if (!root) {
      return null
    }

    this.inorder(root.left, result)
    result.push(root.value)
    this.inorder(root.right, result)

    return result
  }
  this.preorder = (root = this.root, result = []) => {
    if (!root) {
      return null
    }

    result.push(root.value)
    this.preorder(root.left, result)
    this.preorder(root.right, result)

    return result
  }
  this.postorder = (root = this.root, result = []) => {
    if (!root) {
      return null
    }

    this.postorder(root.left, result)
    this.postorder(root.right, result)
    result.push(root.value)

    return result
  }

  // Only change code above this line
}