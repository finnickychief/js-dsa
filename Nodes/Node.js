/*
  In computer science/data structures, Nodes are a way to keep track of data in a semi-structured manner.


*/
class Node {
  constructor(data = null) {
    this.data = data;
  }
}

// Linked List node
class Node {
  constructor(data = null) {
    this.next = null;
    this.data = data;
  }
}

let myNode = new Node(4);
myNode.next = new Node(6);
myNode.next.prev = myNode;
myNode.next.next = new Node(8);
myNode.next.next.prev = myNode.next;
myNode.prev = myNode.next.next;

class LinkedList {
  constructor() {
    this.front = null;
  }

  add() {}
  get() {}
  delete() {}
  update() {}

  // Return a string representation of our list
  toString() {}
}
