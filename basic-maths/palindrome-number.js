/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  let temp = x;
  let rev_num = 0;

  while (temp) {
    rev_num = rev_num * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return rev_num === x;
};
// Time complexity --> O(log 10 n)

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  let rev_num = 0;

  while (x > rev_num) {
    rev_num = rev_num * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === rev_num || x === Math.floor(rev_num / 10);
};

// Time complexity --> O(log 10 n)
