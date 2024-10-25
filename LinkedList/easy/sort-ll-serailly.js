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
  // Function to sort a linked list of 0s, 1s and 2s.
  segregate(head) {
    const cnt = new Array(3).fill(0);
    let curr = head;

    while (curr) {
      cnt[curr.data]++;
      curr = curr.next;
    }

    curr = head;

    for (let i = 0; i < 3; i++) {
      while (cnt[i] && curr) {
        cnt[i]--;
        curr.data = i;
        curr = curr.next;
      }
    }

    return head;
  }
}

/**
 * Time Complexity --> O(n) + O(3 * n);
 * Space Complexity --> O(3);
 */

/********************************************************************************/

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
  // Function to sort a linked list of 0s, 1s and 2s.
  segregate(head) {
    let zero = null,
      one = null,
      two = null;
    let zeroPrev = null,
      onePrev = null,
      twoPrev = null;
    let curr = head;
    while (curr) {
      if (curr.data === 0) {
        if (!zero) {
          zero = curr;
        } else {
          zeroPrev.next = curr;
        }
        zeroPrev = curr;
      } else if (curr.data === 1) {
        if (!one) {
          one = curr;
        } else {
          onePrev.next = curr;
        }
        onePrev = curr;
      } else {
        if (!two) {
          two = curr;
        } else {
          twoPrev.next = curr;
        }
        twoPrev = curr;
      }

      curr = curr.next;
    }

    if (zero) {
      zeroPrev.next = null;
      if (one) {
        zeroPrev.next = one;
        if (two) {
          onePrev.next = two;
          twoPrev.next = null;
        } else {
          onePrev.next = null;
        }
      } else {
        if (two) {
          zeroPrev.next = two;
          twoPrev.next = null;
        }
      }
      return zero;
    } else {
      if (one) {
        onePrev.next = null;
        if (two) {
          onePrev.next = two;
          twoPrev.next = null;
        }
        return one;
      } else if (two) {
        twoPrev.next = null;
        return two;
      }
    }

    return curr;
  }
}

/**
 * Time Complexity --> O(n);
 * Space Complexity --> O(1);
 */
