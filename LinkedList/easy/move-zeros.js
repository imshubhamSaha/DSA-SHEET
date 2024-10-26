// User function Template for javascript
/**
 * @param {Node} head
 * @returns {void}
 */

class Solution {
  // Function to move all zeroes to the end of array.
  moveZeroes(head) {
    let curr = head;
    let zero = null,
      num = null;
    let zeroPrev = null,
      numPrev = null;

    while (curr) {
      let nextNode = curr.next;
      if (curr.data === 0) {
        if (!zero) zero = curr;
        else zeroPrev.next = curr;

        zeroPrev = curr;
      } else {
        if (!num) num = curr;
        else numPrev.next = curr;

        numPrev = curr;
      }

      curr = nextNode;
    }

    if (zero) {
      zeroPrev.next = null;
      if (num) {
        zeroPrev.next = num;
        numPrev.next = null;
      }
      return zero;
    } else {
      if (num) {
        numPrev.next = null;
        return num;
      }
    }

    return curr;
  }
}

/**
 * Time Complexity --> o(n);
 * Space Complexity --> constant
 */

/*********************************************************************************/

// User function Template for javascript
/**
 * @param {Node} head
 * @returns {void}
 */

class Solution {
  // Function to move all zeroes to the end of array.
  moveZeroes(head) {
    let curr = head.next,
      prev = head;

    while (curr) {
      if (curr.data === 0) {
        prev.next = curr.next;
        curr.next = head;
        head = curr;
        curr = prev.next;
        continue;
      }
      prev = curr;
      curr = curr.next;
    }

    return head;
  }
}
/**
 * Time Complexity --> o(n);
 * Space Complexity --> constant
 */
