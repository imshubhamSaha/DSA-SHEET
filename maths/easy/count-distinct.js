/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  let cnt = 1;

  while (n > 2) {
    cnt++;
    n--;
  }

  return cnt;
};
/**
 * Time complexity --> O(n)
 * Space Complexity --> O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  return n > 1 ? n - 1 : n;
};
/**
 * Time complexity --> O(1)
 * Space Complexity --> O(1)
 */
