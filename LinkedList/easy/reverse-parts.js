// User function Template for javascript
/**
 * Definition for singly Link List Node
 * class Node{
 *     constructor(x){
 *         this.data=x;
 *         this.next=null;
 *     }
 * }
 * @param {Node} head
 * @param {number} k
 * @returns {Node}
 */

class Solution {
  /**
   * @param {Node} head
   * @param {number} k
   * @returns {Node}
   */
  reverse(head, k) {
    const newHead = head;
    let prev1 = null;
    while (k > 1) {
      let nextNode = head.next;
      head.next = prev1;
      if (!newHead) newhead = head;
      prev1 = head;
      k--;
      head = nextNode;
    }

    let curr = head.next;
    head.next = prev1;
    let prev2 = null;

    while (curr.next) {
      let nextNode = curr.next;
      curr.next = prev2;
      prev2 = curr;
      curr = nextNode;
    }
    curr.next = prev2;
    newHead.next = curr;

    return head;
  }
}

/**
 * Time Complexity  -->> O(n)
 * Space Complexity -->> constant
 */
