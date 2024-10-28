/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
  floorSqrt(n) {
    if (n === 0 || n === 1) return n;

    let start = 1;
    let ans = 0;

    while (start * start <= n) {
      ans = start;
      start++;
    }

    return ans;
  }
}

/**
 * TIme Complexity -->> O(Sqrt(n));
 * Space COmplexity -->> constant
 */

/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
  floorSqrt(n) {
    if (n === 0 || n === 1) return n;
    let start = 1,
      end = n / 2;
    let res = -1;

    while (start <= end) {
      let mid = (start + end) >> 1;

      if (mid * mid === n) return mid;
      else if (mid * mid < n) {
        start = mid + 1;
        res = Math.floor(mid);
      } else end = mid - 1;
    }

    return res;
  }
}
/**
 * Time Complexity --> O(log(n))
 * Space Complexity --> constant
 */
