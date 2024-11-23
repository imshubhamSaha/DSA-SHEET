/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
  check(inp, prefixSum, idx, j) {
    if (prefixSum === inp.maxSum) {
      if (j - idx > inp.len) {
        inp.len = j - idx;
        inp.start = idx;
        inp.end = j;
      }
    } else if (prefixSum > inp.maxSum) {
      inp.len = j - idx;
      inp.maxSum = prefixSum;
      inp.start = idx;
      inp.end = j;
    }
  }
  //Function to find subarray with given sum
  findSubarray(a, n) {
    let prefixSum = 0;
    const inp = { maxSum: 0, len: 0, start: -1, end: -1 };
    let idx = 0;
    for (let j = 0; j < n; j++) {
      const num = a[j];
      if (num < 0) {
        this.check(inp, prefixSum, idx, j);
        prefixSum = 0;
        idx = j + 1;
      } else {
        prefixSum += num;
      }
    }

    if (prefixSum >= inp.maxSum) {
      this.check(inp, prefixSum, idx, n);
    }

    if (inp.end === -1) return [-1];

    if (inp.start === inp.end) return [a[inp.start]];

    return a.slice(inp.start, inp.end);
  }
}
/**
 * Time -->> O(n)
 * Space -->> 0(n)
 */

class Solution {
  //Function to find subarray with given sum
  findSubarray(a, n) {
    let maxSum = 0;
    let start = 0,
      end = 0,
      len = 0;

    let i = 0;

    while (i < n) {
      let j = i + 1;
      let sum = 0;
      if (a[i] < 0) {
        i++;
        continue;
      }
      sum += a[i];
      while (j < n && a[j] >= 0) {
        sum += a[j++];
      }

      if (sum > maxSum || (maxSum === sum && j - i > len)) {
        maxSum = sum;
        start = i;
        end = j;
        len = j - i;
      }
      if (j !== i + 1) i = j - 1;
      else i++;
    }

    return a.slice(start, end);
  }
}
