/**
 * @param {number[]} arr
 * @param {number} x
 * @return {boolean}
 */

class Solution {
  twoSum(arr, target) {
    const n = arr.length;
    const req = new Set();
    for (let i = 0; i < n; i++) {
      const reqSum = target - arr[i];
      if (req.has(reqSum)) return true;
      req.add(arr[i]);
    }

    return false;
  }
}
