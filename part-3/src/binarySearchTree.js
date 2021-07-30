class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let node = new BinarySearchTreeNode(value)
    if(value < this.value) {
      if(this.left === null) {
        this.left = node
      } else {
        this.left.insert(value)
      }
    }
    if(value > this.value) {
      if(this.right === null) {
        this.right = node
      } else {
        this.right.insert(value)
      }
    }
  }

  contains(value) {
    if(value === this.value) {
      return true
    } else if(this.left === null && this.right === null) {
      return false
    }
    if(value < this.value) {
      return this.left.contains(value)
    } else {
      return this.right.contains(value)
    }
  }

  inorder(callback) {
    if(this.left) {
      this.left.inorder(callback)
    }
    callback(this.value)
    if(this.right) {
      this.right.inorder(callback)
    }
  }
}

module.exports = BinarySearchTreeNode;
