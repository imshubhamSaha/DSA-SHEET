// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {boolean}
 */

class Solution {
  // Function should return 0 if length is even else return 1
  isLengthEven(head) {
    let curr = head;
    let len = 0;

    while (curr) {
      len++;
      curr = curr.next;
    }

    return len % 2 === 0;
  }
}
/**
 * Time Complexity --> O(n)
 * Space Complexity --> constant
 */
