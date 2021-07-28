class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {
    let node = new Node(value)

    if(!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
    this._size++
  }

  remove(value) {
    let currentNode = this.head
    let pastNode = null;

    while(currentNode) {
      if(currentNode.value === value) {
        if(!pastNode) {
          this.head = currentNode.next
        } else {
          pastNode.next = currentNode.next
        }
        this._size--
      }
      pastNode = currentNode
      currentNode = currentNode.next
    }
  }

  getNodeAt(index) {
    let pastNode = this.head
    if(index > this._size) {
      return;
    }
    for(let i = 0; i < index; i++) {
      pastNode = pastNode.next
    }
    return pastNode
  }

  contains(value) {
    let pastNode = this.head
    while(pastNode) {
      if(pastNode.value === value) {
        return true
      } else {
        pastNode = pastNode.next
      }
    }
    return false
  }

  indexOf(value) {
    let pastNode = this.head
    let count = 0

    while(pastNode) {
      if(pastNode.value === value) {
        return count
      } else {
        count++
        pastNode = pastNode.next
      }
    }
    return -1
  }

  size() {
    return this._size
  }
}

module.exports = LinkedList;
