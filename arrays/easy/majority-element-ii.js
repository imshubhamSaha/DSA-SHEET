/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  if (n === 1) return nums;
  const oneThird = n / 3;
  const res = [];
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = i; j < n; j++) {
      if (nums[i] === nums[j]) cnt++;
    }

    if (cnt > oneThird && res[res.length - 1] !== nums[i]) res.push(nums[i]);
    if (res.length === 2) break;
  }

  return res;
};
/**
 * Time Complexity --> O(n * n)
 * Space  -->> O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  if (n === 1) return nums;
  const oneThird = n / 3;
  const res = [];

  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (
      map.get(nums[i]) > oneThird &&
      (!res.length || res[res.length - 1] !== nums[i])
    )
      res.push(nums[i]);

    if (res.length === 2) break;
  }

  return res;
};

/**
 * Time Complexity --> O(n)
 * Space  -->> O(n)
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var findMajority = function (arr) {
  const [cnt1, cnt2, majority1, majority2] = arr.reduce(
    (acc, curr) => {
      const [cnt1, cnt2, majority1, majority2] = acc;
      if (curr === acc[2]) acc[0] = acc[0] + 1;
      else if (curr === acc[3]) acc[1] = acc[1] + 1;
      else if (cnt1 === 0) {
        acc[0] = 1;
        acc[2] = curr;
      } else if (cnt2 === 0) {
        acc[1] = 1;
        acc[3] = curr;
      } else {
        acc[0] = acc[0] - 1;
        acc[1] = acc[1] - 1;
      }

      return acc;
    },
    [0, 0, Infinity, Infinity]
  );

  return [majority1, majority2];
};

/**
 * @param {number[]} arr
 * @param {number[]} majority
 * @param {number} oneThird
 * @param {number[]} res
 * @return {number[]}
 */
var isMajority = function (arr, majority, oneThird, res) {
  const [m1, m2] = majority;
  const [cnt1, cnt2] = arr.reduce(
    (acc, curr) => {
      if (curr === m1) acc[0] = acc[0] + 1;
      else if (curr == m2) acc[1] = acc[1] + 1;

      return acc;
    },
    [0, 0]
  );

  if (cnt1 > oneThird) res.push(m1);
  if (cnt2 > oneThird) res.push(m2);

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  if (n === 1) return nums;
  const oneThird = n / 3;
  const res = [];

  return isMajority(nums, findMajority(nums), oneThird, res);
};

/**
 * Time Complexity --> O(n)
 * Space  -->> O(1)
 */
