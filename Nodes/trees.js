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

  // Step 1:
  /*
  Write a function that performs an in-order traversal and builds a sorted array using a binary search tree.
*/
  buildArray() {
    // tree.buildArray();
    let result;
    result = this.buildAryUtil(this.root, []);
    return result;
  }
  buildAryUtil(node, ary) {
    // buildAry(node = this.root,ary=[]){ // Version without util

    if (node) {
      // Add left tree to array
      this.buildAryUtil(node.left, ary);
      ary.push(node.data); // Add current item to the array
      // Add right tree to the array
      this.buildAryUtil(node.right, ary);
      return ary;
    }
  }

  buildBalancedTree(arr, leftBound = 0, rightBound = arr.length - 1) {
    let midPoint = Math.floor((leftBound + rightBound) / 2);
    debugger;
    console.log(
      `Current item is: ${
        arr[midPoint]
      }, left boundary is ${leftBound}, right boundary is ${rightBound}`
    );
    if (rightBound < leftBound) {
      return -1;
    }

    this.add(arr[midPoint]); // Used to be return index, now should be add item to tree

    // add the left half to tree
    this.buildBalancedTree(arr, leftBound, midPoint - 1);
    // add the right half to tree
    this.buildBalancedTree(arr, midPoint + 1, rightBound);
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

// Rebuild a BST

// Step 2:
/*
  Write a function that rebuilds a balanced binary search tree using a sorted array.
*/

// Modified binary search algorithm:
// Step 1: Add current middle item to the tree - Average of the 2 indexes
// Step 2: Visit the left half of the array - use 2 indexes. left will stay left, right will be midPoint - 1
// Step 3: Visit the right half of the array - left will be midPoint + 1, right will stay right

console.log(tree.buildArray());

let tree2 = new BinaryTree();
tree2.add(8);
tree2.add(3);
tree2.add(1);
tree2.add(2);
tree2.add(8);
tree2.add(9);
tree2.add(23);
tree2.add(11);
tree2.add(-2);
tree2.add(-3);

console.log(tree2.buildArray());

let sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newTree = new BinaryTree();
newTree.buildBalancedTree(sortedArr);
newTree.preorder();
