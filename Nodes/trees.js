class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    // if there is no root yet, create one and return.
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let newNode = new Node(value);
    let currNode = this.root;

    while (currNode) {
      if (value < currNode.data) {
        // if the left node does not exist, add a new node there for our new value
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        } else {
          currNode = currNode.left;
        }
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        } else {
          currNode = currNode.right;
        }
      }
    }
  }
  preorder(node = this.root) {
    if (node) {
      console.log(node.data);
      // Print left tree
      this.preorder(node.left);
      // Print right tree
      this.preorder(node.right);
    }
  }
  inOrder(node = this.root) {
    if (node) {
      // Print left tree
      this.inOrder(node.left);
      console.log(node.data);
      // Print right tree
      this.inOrder(node.right);
    }
  }
  postOrder(node = this.root) {
    if (node) {
      // Print left tree
      this.postOrder(node.left);
      // Print right tree
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

let tree = new BinaryTree();
tree.add(2);

tree.add(4);
tree.add(8);
tree.add(6);
tree.add(3);
tree.add(1);
tree.add(9);

tree.postOrder();
// Pseudocode for traversals:
/*
  Pre-order:
    Print out the current node
    Print out the left tree
    Print out the right tree*/

/*In-order:
    Print out the left tree
    Print out the current node
    Print out the right tree

  Post-order:
    Print out the left tree
    Print out the right tree
    Print out the current node


*/
