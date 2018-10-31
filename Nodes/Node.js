console.log('In node.js');

/*
  In computer science/data structures, Nodes are a way to keep track of data in a semi-structured manner.


*/
// class Node {
//   constructor(data = null) {
//     this.data = data;
//   }
// }

// Linked List node
class Node {
  constructor(data = null) {
    this.next = null;
    this.data = data;
  }
}

// let myNode = new Node(4);
// myNode.next = new Node(6);
// myNode.next.prev = myNode;
// myNode.next.next = new Node(8);
// myNode.next.next.prev = myNode.next;
// myNode.prev = myNode.next.next;

class LinkedList {
  constructor() {
    this.front = null;
  }
  // Add a node to the end of the list
  add(data) {
    if (this.front === null) {
      this.front = new Node(data);
      return;
    }
    // Create a copy so we can keep track of where we are without losing any data
    let runner = this.front;

    // Traverse the list until we find the last item
    while (runner.next) {
      runner = runner.next;
    }
    runner.next = new Node(data);
  }
  // Find the index of a node by the data
  find(data) {
    // If there is no front, we cannot possible find the data.
    if (this.front === null) {
      return -1;
    }

    let runner = this.front;
    let index = 0;
    // Traverse the nodes until we find the data, or run out of nodes
    while (runner) {
      if (runner.data === data) {
        return index;
      }
      runner = runner.next;
      index++;
    }

    // If we didn't find the data, return -1
    return -1;
  }
  // Get data by the index
  get() {}
  // Delete a node that holds a piece of data
  delete() {}
  // Update a node by searching for data, and replacing that data with another item.
  update() {}

  // Return a string representation of our list
  toString() {}
}

let myLinkedList = new LinkedList();
myLinkedList.add(2);
myLinkedList.add(4);
myLinkedList.add(6);
myLinkedList.add(8);
myLinkedList.add(10);
// console.log(myLinkedList);

console.log(myLinkedList.find(6));
console.log(myLinkedList.find(10));
console.log(myLinkedList.find(3));
