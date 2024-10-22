/*LINKED LIST NODE*/
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

/*
    Print elements of a linked list on console
    Head pointer input could be NULL as well for empty list
*/

/**
 * @param {Node} head
 */

class Solution {
  // Function to display the elements of a linked list
  display(head) {
    let curr = head;
    let str = "";
    while (curr) {
      str += curr.data;
      if (curr.next) str += " ";
      curr = curr.next;
    }

    console.log(str);
  }
}

const data = new Node(1);
data.next = new Node(2);
const sol = new Solution();

sol.display(data);

/**
 * Time Complexity --> O(n)
 * Space Complexity --> o(n);
 */
