/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let slow = 0;
  let fast = 1;
  let new_len = 1;
  for (let i = 1; i < n; i++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
      new_len++;
    }
    fast++;
  }
  return new_len;
};
