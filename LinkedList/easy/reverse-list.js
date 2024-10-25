/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  // Function to reverse a linked list.
  reverseList(head) {
    let curr = head;
    let prev = null;

    while (curr) {
      let nextNode = curr.next;

      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }

    return prev;
  }
}
