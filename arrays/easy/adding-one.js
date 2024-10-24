/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  addOne(arr) {
    const n = arr.length;
    const result = [];
    result.push((arr[n - 1] + 1) % 10);
    let carry = Math.floor((arr[n - 1] + 1) / 10);
    for (let j = n - 2; j >= 0; j--) {
      let sum = carry + arr[j];
      result.push(sum % 10);
      carry = Math.floor(sum / 10);
    }

    if (carry) result.push(carry);

    return result.reverse();
  }
}
