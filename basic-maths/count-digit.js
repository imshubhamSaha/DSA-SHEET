/**
 * @param {number} N
 * @returns {boolean}
 */

class Solution {
  //Function to check whether the number evenly divides N.
  evenlyDivides(N) {
    let perfect_divisor = 0;
    let n = N;

    while (n > 0) {
      let divisor = n % 10;
      if (n !== 0) perfect_divisor += N % divisor === 0 ? 1 : 0;
      n = Math.floor(n / 10);
    }

    return perfect_divisor;
  }
}
