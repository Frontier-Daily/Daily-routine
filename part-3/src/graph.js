/*
 *  - Undirected Graph
 *  - Adjacency list implementation
 */
class Graph {
  constructor() {
    /*
     *  ex)
     *    nodes = {
     *      0: [ 1, 2 ],
     *      1: [ 0 ],
     *      2: [ 0 ]
     *    }
     */
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {
    if(this.nodes[node]) {
      return true
    } else {
      return false
    }
  }

  removeNode(node) {
    delete this.nodes[node]
  }

  hasEdge(fromNode, toNode) {
    if(this.contains(fromNode)) {
      return this.nodes[fromNode].includes(toNode)
    } else {
      return false
    }
  }

  addEdge(fromNode, toNode) {
    let node = this.nodes
    node[fromNode].push(toNode)
    node[toNode].push(fromNode)
  }

  removeEdge(fromNode, toNode) {
    let node = this.nodes
    node[fromNode].splice(node[fromNode].indexOf(toNode),1)
    node[toNode].splice(node[toNode].indexOf(fromNode),1)
  }
}

module.exports = Graph;
