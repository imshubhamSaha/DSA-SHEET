/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
  lenOfLongestSubarr(arr, k) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
        sum += arr[j];

        if (sum === k) {
          return j - i + 1;
        }
      }
    }

    return 0;
  }
}
/**
 * Time --> O(n * n)
 * SPace -->> constant
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
  lenOfLongestSubarr(arr, k) {
    const n = arr.length;
    let maxLen = 0;
    let len = 0;
    let prefixSum = 0;
    const map = new Map();
    map.set(0, -1);
    for (let i = 0; i < n; i++) {
      prefixSum += arr[i];

      if (map.has(prefixSum - k)) {
        len = i - map.get(prefixSum - k);
        maxLen = Math.max(maxLen, len);
      }

      if (!map.has(prefixSum)) {
        map.set(prefixSum, i);
      }
    }

    return maxLen;
  }
}
/**
 * Time  --> O(n)
 * Space -->> constant
 */
