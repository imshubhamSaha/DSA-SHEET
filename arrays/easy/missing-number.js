/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const hashed = new Array(n + 1).fill(false);

  nums.forEach((num) => (hashed[num] = true));

  for (let i = 0; i <= n; i++) {
    if (!hashed[i]) return i;
  }
};
/**
 * Time complexity -> O(n)
 * space Complexity --> O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const missing = nums.reduce((acc, num, idx) => acc ^ num ^ (idx + 1), 0);
  return missing;
};

/**
 * Time Complexity --> O(n)
 * Space Complexity --> O(1)
 */
