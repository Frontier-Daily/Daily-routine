class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) {
    let node = new TreeNode(value)
    return this.children.push(node)
  }

  contains(value) {
    if(this.value === value) {
      return true
    } else {
      for(let el of this.children) {
        if(el.contains(value)) {
          return true
        }
      }
      return false
    }
  }
}

module.exports = TreeNode;
