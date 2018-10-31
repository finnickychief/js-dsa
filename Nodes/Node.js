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
  get(indexToFind) {
    if (this.front === null) {
      return null;
    }

    let runner = this.front;
    let index = 0;

    while (runner) {
      if (index === indexToFind) {
        return runner.data;
      }
      index++;
      runner = runner.next;
    }

    return null;
  }
  // Delete a node that holds a piece of data
  delete(data) {
    if (this.front === null) {
      return false;
    }
    // Remove the front if it holds the data
    if (this.front.data === data) {
      this.front = this.front.next;
      return true;
    }

    let runner = this.front;
    // Traverse the list
    while (runner.next) {
      // If the next data has the piece we want, skip that node to 'delete' it
      if (runner.next.data === data) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }

    return false;
  }
  // Update a node by searching for data, and replacing that data with another item.
  update(data, updated) {
    if (this.front === null) {
      return false;
    }

    let runner = this.front;

    while (runner) {
      // If we've found the item we're looking for, update it and get out of the function
      if (runner.data === data) {
        runner.data = updated;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  // Return a string representation of our list
  toString() {
    let output = '';

    let runner = this.front;

    while (runner) {
      output += `${runner.data} -> `;
      runner = runner.next;
    }

    return output;
  }
}

let myLinkedList = new LinkedList();
myLinkedList.add(2);
myLinkedList.add(4);
myLinkedList.add(6);
myLinkedList.add(8);
myLinkedList.add(10);
myLinkedList.add(12);
myLinkedList.add(14);
// console.log(myLinkedList);

// console.log(myLinkedList.find(6));
// console.log(myLinkedList.find(10));
// console.log(myLinkedList.find(3));

// console.log(myLinkedList.get(0));
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.get(4));
// console.log(myLinkedList.get(800));

// myLinkedList.delete(6);
// myLinkedList.delete(8);
// myLinkedList.delete(2);

console.log(myLinkedList.update(4, 7));
console.log(myLinkedList.update(6, 8));
console.log(myLinkedList.update(20, 0));
console.log(myLinkedList.update(8, 6));

console.log(myLinkedList.toString());

// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list. Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new LinkedList();
//    list.add('a');
//    list.add('b');
//    list.add('c');
//    list.add('d');
//    list.add('e');
//    list.add('f');
//    list.fromLast(2).data // 'd'
//    list.fromLast(5).data // 'a'
//    list.fromLast(3).data // 'c'
