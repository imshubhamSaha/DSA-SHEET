/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.

var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;

  while (k > 0) {
    let temp = nums[n - 1];
    for (let i = n - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    k--;
  }
};
Time complexity --> O(k * n)
Space -->> O(1)
 */

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} last
 * @return {void}
 */
var jumble = function (arr, start, last) {
  let left = start;
  let right = last;
  while (left < right) {
    const temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  jumble(nums, 0, n - 1);
  jumble(nums, 0, k - 1);
  jumble(nums, k, n - 1);
};
