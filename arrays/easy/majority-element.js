/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  const half = n / 2;

  for (let i = 0; i < n - 1; i++) {
    let cnt = 1;
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) cnt++;
    }

    if (cnt > half) return nums[i];
  }

  return -1;
};

/**
 * Time Complexity -->> O(n * n)
 * Space --> constant
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  const half = n / 2;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (map.get(nums[i]) > half) return nums[i];
  }

  return -1;
};

/**
 * Time Complexity -->> O(n)
 * Space --> O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMajority = function (arr) {
  const [cnt, majority] = arr.reduce(
    (acc, curr) => {
      const [cnt, majority] = acc;
      if (cnt === 0 || curr === majority) {
        acc[0] = acc[0] + 1;
        acc[1] = curr;
      } else acc[0] = acc[0] - 1;
      return acc;
    },
    [0, -1]
  );

  return majority;
};

/**
 * @param {number[]} nums
 * @param {number} majority
 * @param {float} half
 * @return {number}
 */
var isMajority = function (arr, majority, half) {
  const [cnt, _] = arr.reduce(
    (acc, curr) => {
      if (curr === acc[1]) acc[0] = acc[0] + 1;
      return acc;
    },
    [0, majority]
  );
  return cnt > half ? majority : -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  const half = n / 2;
  return isMajority(nums, findMajority(nums), half);
};

/**
 * Time Complexity -->> O(n)
 * Space --> O(1)
 */
