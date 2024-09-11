/**
 * GFG QUESTION
 * Sum of all divisors from 1 to n
 */

var sumOfDivisor = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) sum += j;
    }
  }

  return sum;
};
console.log(sumOfDivisor(4));
/**
 * Time Complexity --> O(n * n)
 * Space Complexity --> constant
 */
