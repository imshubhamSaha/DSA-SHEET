/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const n = nums.length;
  let len = 0;
  let i = 0;

  while (i < n) {
    if (nums[i] !== val) {
      i++;
      len++;
      continue;
    }

    let j = i + 1;

    while (j < n) {
      if (nums[j] !== val) {
        nums[i] ^= nums[j];
        nums[j] ^= nums[i];
        nums[i] ^= nums[j];
        len++;
        break;
      }
      j++;
    }
    i++;
    if (j >= n - 1) break;
  }

  return len;
};
/**
 * Time -> O(n)
 * Space --> O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const n = nums.length;
  let idx = 0;
  let start = 0;

  while (start < n) {
    if (nums[start] !== val) nums[idx++] = nums[start];

    start++;
  }
  return idx;
};
