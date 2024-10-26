/**
 * @param {Node} node
 * @return {Node} node
 */

/*
  Pairwise swap a linked list
  The input list will have at least one element
  node is defined as

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
  pairWiseSwap(node) {
    if (!node || !node.next) return node;

    let curr = node;

    while (curr && curr.next) {
      curr.data = curr.data ^ curr.next.data;
      curr.next.data = curr.next.data ^ curr.data;
      curr.data = curr.data ^ curr.next.data;
      curr = curr.next.next;
    }

    return node;
  }
}
/**
 * Time Complexity --> O(n)
 * Space Complexity --> constant
 */
