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

  // Implement a find function
  /*
  This function should search through the tree for a specific value, and return true if it finds it and false if it does not exist
*/

  find2(data) {
    if (!this.root) {
      return false;
    }

    let currNode = this.root;

    while (currNode) {
      if (currNode.data === data) {
        return true;
      }
      if (data < currNode.data) {
        currNode = currNode.left; // If the data is less than the current node, go left
      } else {
        currNode = currNode.right; // otherwise, go right
      }
    }
    return false;
  }

  find(data, node = this.root) {
    if (!node) {
      return false;
    }
    if (data === node.data) {
      return true;
    }
    if (data < node.data) {
      return this.find(data, node.left);
    } else {
      return this.find(data, node.right);
    }
  }

  /*
    Write a function that searches for an item, and tells you at what depth it occurs first within the tree.

    findDepthOfItem(data){}
  */

  findDepthOfItem2(data) {
    if (!this.root) {
      return -1;
    }

    let currNode = this.root;
    let depth = 0;
    while (currNode) {
      if (currNode.data === data) {
        return depth;
      }
      depth++;
      if (data < currNode.data) {
        currNode = currNode.left; // If the data is less than the current node, go left
      } else {
        currNode = currNode.right; // otherwise, go right
      }
    }
    return -1;
  }

  findDepthOfItem(data, node = this.root, depth = 0) {
    if (!node) {
      return -1;
    }
    if (data === node.data) {
      return depth;
    }
    depth++;
    if (data < node.data) {
      return this.findDepthOfItem(data, node.left, depth);
    } else {
      return this.findDepthOfItem(data, node.right, depth);
    }
  }

  // Find the depth of the tree. This will be where the item furthest down in the tree occurs.
  /*
    Algorithm:
      Find depth of this item
      Find depth of left sub-tree
      Find depth of right sub-tree
      Return max depth of the left and right
  */

  findMaxDepth(node = this.root, depth = 0) {
    if (!node.left && !node.right) {
      return depth;
    }
    depth++;
    let leftDepth = this.findMaxDepth(node.left, depth);
    let rightDepth = this.findMaxDepth(node.right, depth);

    return Math.max(leftDepth, rightDepth);
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

// console.log(tree.find(2));
// console.log(tree.find(3));
// console.log(tree.find(7));
// console.log(tree.find(9));
// console.log(tree.find(-2));

console.log(tree.findDepthOfItem(6));
console.log(tree.findDepthOfItem(3));
console.log(tree.findDepthOfItem(9));
console.log(tree.findDepthOfItem(1300000000));

console.log(tree.findMaxDepth());
