/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const n = nums.length;
  let rotated = false;
  for (let i = 1; i < n; i++) {
    if (!rotated && nums[i] < nums[i - 1]) {
      rotated = true;
      if (nums[i] > nums[0]) return false;
    } else if (rotated && (nums[i] < nums[i - 1] || nums[i] > nums[0]))
      return false;
  }
  return true;
};
console.log(check([1, 3, 2]));
