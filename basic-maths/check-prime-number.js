/**
 * Problem statement
A prime number is a positive integer that is divisible by exactly 2 integers, 1 and the number itself.
You are given a number 'n'.
Find out whether 'n' is prime or not.
Example :
Input: 'n' = 5
Output: YES
Explanation: 5 is only divisible by 1 and 5. 2, 3 and 4 do not divide 5.
 */

var checkPrimeNumber = function (n) {
  let factors = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      factors++;
      if (n / i !== i) factors++;
    }

    if (factors > 2) return false;
  }

  return factors === 2;
};

/**
 * TIME COMPLEXITY --> O(SQRT(N))
 * SPACE COMPLEXITY --> CONSTANT
 */
console.log(checkPrimeNumber(6));
