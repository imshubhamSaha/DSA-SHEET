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
  // Function to remove duplicates from sorted linked list.
  removeDuplicates(head) {
    let curr = head.next;
    let prev = head;

    while (curr) {
      if (curr.data === prev.data) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
    prev.next = null;

    return head;
  }
}
