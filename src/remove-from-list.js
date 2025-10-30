const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Move head
  while (l.value === k) {
    l = l.next;
  }

  let prev = l;
  let current = l.next;

  while (current) {
    if (current.value === k) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return l;
}

module.exports = {
  removeKFromList
};
