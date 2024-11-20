var reverse = function (arr, start, end) {
  while (start < end) {
    arr[start] ^= arr[end];
    arr[end] ^= arr[start];
    arr[start] ^= arr[end];
    start++;
    end--;
  }
  return arr;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) return;
  const n = nums.length;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
};
