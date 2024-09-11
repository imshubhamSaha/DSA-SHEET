/**
 * GFG QUESTION
 * Sum of all divisors from 1 to n
 */

var sumOfDivisor = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i * Math.floor(n / i);
  }

  return sum;
};
console.log(sumOfDivisor(5));
/**
 * Time Complexity --> O(n)
 * Space Complexity --> constant
 */
