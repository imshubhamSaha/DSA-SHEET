/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const maxOnes = nums.reduce(
    (maxOnes, num) => {
      if (num === 1) maxOnes[1]++;
      else maxOnes[1] = 0;

      maxOnes[0] = Math.max(maxOnes[0], maxOnes[1]);
      return maxOnes;
    },
    [0, 0]
  );
  return maxOnes[0];
};

/**
 * Time Complexity --> O(n)
 * Space Complexity --> constant
 */
