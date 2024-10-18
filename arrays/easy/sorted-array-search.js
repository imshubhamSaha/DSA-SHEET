/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
 */

class Solution {
  searchInSorted(arr, n, k) {
    let low = 0,
      high = n - 1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (arr[mid] === k) return 1;
      else if (arr[mid] > k) high = mid - 1;
      else low = mid + 1;
    }

    return -1;
  }
}

/**
 * Time Complexity --> O(logn)
 * Space Complexity --> constant
 */
