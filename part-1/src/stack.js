class Stack {
  constructor() {
    this.storage = {};
    this.top = -1;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(element) {
    return this.storage[++this.top] = element;
  }

  pop() {
    let current = this.storage[this.top];
    
    if(this.top < 0) {
      return undefined;
    }
    delete this.storage[this.top--];
    return current;
  }
}

module.exports = Stack;