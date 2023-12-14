const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addElement(this.treeRoot, data);

    function addElement(node, data) {
      
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data > node.data) {
        node.right = addElement(node.right, data);
      } else {
        node.left = addElement(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return searchHas(this.treeRoot, data);
    
    function searchHas(node, data) {
      if(!node) return false;

      if(node.data === data) return true;

      if(data > node.data) {
        return searchHas(node.right, data);
      } else {
        return searchHas(node.left, data);
      }
    }
  }

  find(data) {
    return searchFind(this.treeRoot, data);
    
    function searchFind(node, data) {

      if(!node) return null;

      if(node.data === data) return node;

      if(data > node.data) {
        return searchFind(node.right, data);
      } else {
        return searchFind(node.left, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if(!node) return null;

      if(node.data === data) {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        node.left = removeNode(node.left, data);
        return node;
      }
    }
  }

  min() {
    if(!this.treeRoot) return;

    let node = this.treeRoot;

    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.treeRoot) return;

    let node = this.treeRoot;

    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};