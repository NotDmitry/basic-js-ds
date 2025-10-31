const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  addDataToNode(data, node) {
    if (!node) return new Node(data);

    if (data < node.data) {
      node.left = this.addDataToNode(data, node.left);
    }

    if (data > node.data) {
      node.right = this.addDataToNode(data, node.right);
    }

    return node;
  }

  add(data) {
    this.rootNode = this.addDataToNode(data, this.rootNode);
  }

  findDataNode(data, node) {
    if (!node) return null;

    if (node.data === data) return node;

    if (data < node.data) {
      return this.findDataNode(data, node.left);
    }

    if (data > node.data) {
      return this.findDataNode(data, node.right);
    }
  }

  find(data) {
    return this.findDataNode(data, this.rootNode);
  }

  has(data) {
    return Boolean(this.find(data));
  }

  removeDataNode(data, node) {
    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const maxLeftElement = this.maxSubtreeElement(node.left);
      node.data = maxLeftElement;
      node.left = this.removeDataNode(maxLeftElement, node.left);
      return node;
    }

    if (data < node.data) {
      node.left = this.removeDataNode(data, node.left);
    }

    if (data > node.data) {
      node.right = this.removeDataNode(data, node.right);
    }

    return node;
  }

  remove(data) {
    if (this.has(data)) {
      this.rootNode = this.removeDataNode(data, this.rootNode);
    }
  }

  minSubtreeElement(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  maxSubtreeElement(node) {
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  min() {
    return this.minSubtreeElement(this.rootNode);
  }

  max() {
    return this.maxSubtreeElement(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};