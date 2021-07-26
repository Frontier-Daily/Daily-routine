class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(element) {
    return this.storage[this.rear++] = element;
  }

  dequeue() {
    let current = this.storage[this.front];

    delete this.storage[this.front];
    if(this.front < this.rear) {
      this.front++;
    }
    return current;
  }
}

module.exports = Queue;
