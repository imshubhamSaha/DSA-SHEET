/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === target) return i;

    if (target < nums[i]) {
      return i;
    }
  }

  return n;
};
/**
 * TC- O(n)
 * Space --> O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = (low + high) >> 1;

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return low;
};

/**
 * TC- O(logn)
 * Space --> O(1)
 */
