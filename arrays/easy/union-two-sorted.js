/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

class Solution {
  // Function to return a list containing the union of the two arrays.
  findUnion(a, b) {
    const n = a.length,
      m = b.length;
    const union = [];
    let i = 0,
      j = 0;

    while (i < n && j < m) {
      const len = union.length;
      if (a[i] < b[j]) {
        if (!len || union[len - 1] !== a[i]) union.push(a[i]);

        i++;
      } else if (b[j] < a[i]) {
        if (!len || union[len - 1] !== b[j]) union.push(b[j]);

        j++;
      } else {
        if (!len || union[len - 1] !== a[i]) union.push(a[i]);

        i++;
        j++;
      }
    }

    while (i < n) {
      const len = union.length;
      if (!len || union[len - 1] !== a[i]) union.push(a[i]);

      i++;
    }

    while (j < m) {
      const len = union.length;
      if (!len || union[len - 1] !== b[j]) union.push(b[j]);

      j++;
    }

    return union;
  }
}
/**
 * Time Complexity --> O(n + m)
 * Space Complexity --> O(n)
 */
