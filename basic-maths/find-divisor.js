/*
You are given an integer ‘n’.
Function ‘sumOfDivisors(n)’ is defined as the sum of all divisors of ‘n’.
Find the sum of ‘sumOfDivisors(i)’ for all ‘i’ from 1 to ‘n’.
Example:
Input: ‘n’  = 5
Output: 21
Explanation:
We need to find the sum of ‘sumOfDivisors(i)’ for all ‘i’ from 1 to 5. 
‘sumOfDivisors(1)’ = 1
‘sumOfDivisors(2)’ = 2 + 1 = 3
‘sumOfDivisors(3)’ = 3 + 1 = 4
‘sumOfDivisors(4)’ = 4 + 2 +1 = 7 
‘sumOfDivisors(5)’ = 5 + 1 = 6
Therefore our answer is sumOfDivisors(1) + sumOfDivisors(2) + sumOfDivisors(3) + sumOfDivisors(4) + sumOfDivisors(5) = 1 + 3 + 4 + 7 + 6 = 21.
*/
var sumOfDivisors = function (n) {
  let sum = 0;
  for (let i = 1; i <= 36; i++) {
    if (n % i === 0) sum += i;
  }

  return sum;
};
console.log(sumOfDivisors(36));
//Time complexity --> O(n)

var sumDivisor = function (n) {
  let sum = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) sum += i;

    if (n % (n / i) === 0 && n / i !== i) sum += n / i;
  }
  return sum;
};

console.log(sumDivisor(36));
// Time complexity --> O(sqrt(n));
