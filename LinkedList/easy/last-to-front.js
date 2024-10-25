// User function Template for javascript
/**
 * Definition for singly Link List Node
 * class Node{
 *     constructor(x){
 *         this.data = x
 *         this.next = null
 *     }
 * }
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
  // Function to move last element to front in a linked list.
  moveToFront(head) {
    if (!head.next) return head;
    let curr = head;

    while (curr.next.next) curr = curr.next;

    curr.next.next = head;
    head = curr.next;
    curr.next = null;

    return head;
  }
}
