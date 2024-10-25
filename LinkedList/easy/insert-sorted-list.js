/**
 * @param {Node} node
 * @param {number} x
 * @return {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
  sortedInsert(node, x) {
    const newNode = new Node(x);
    if (x <= node.data) {
      newNode.next = node;
      return newNode;
    }

    let curr = node.next;
    let prev = node;

    while (curr) {
      if (x < curr.data) {
        prev.next = newNode;
        newNode.next = curr;
        return node;
      }
      prev = curr;
      curr = curr.next;
    }

    if (x >= prev.data) {
      prev.next = newNode;
    }

    return node;
  }
}
