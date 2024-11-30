/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let idx = 1;
  let len = 1;
  let i = 1;
  while (i < n) {
    let j = i;
    while (j < n) {
      if (nums[idx - 1] !== nums[j]) {
        nums[idx++] = nums[j];
        i = j;
        break;
      }
      j++;
    }
    if (j >= n - 1) break;
  }

  return idx;
};
/**
 * TC --> O(n * n)
 * SC - constant
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let idx = 1;
  let j = 1;
  while (j < n) {
    if (nums[j] !== nums[idx - 1] && nums[j] > nums[idx - 1]) {
      nums[idx++] = nums[j];
    }
    j++;
  }

  return idx;
};
/**
 * TC --> O(n )
 * SC - constant
 */
