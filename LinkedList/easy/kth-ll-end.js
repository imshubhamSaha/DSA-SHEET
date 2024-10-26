/* class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}*/

/**
 * @param Node head
 * @param number k
 * @returns number
 */

class Solution {
  getKthFromLast(head, k) {
    let slow = head,
      fast = head;

    while (k > 1 && fast) {
      k--;
      fast = fast.next;
    }

    if (!fast) return -1;

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.data;
  }
}
/**
 * Time Complexity --> O(n)
 * Space Complexity --> constant
 */
