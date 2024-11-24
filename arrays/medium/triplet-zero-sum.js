class Solution {
  /**
   * @param {number[]} arr
   * @return {number[][]}
   */
  findTriplets(arr) {
    const n = arr.length;

    const res = [];

    for (let i = 0; i < n - 2; i++) {
      let sum = arr[i];
      for (let j = i + 1; j < n - 1; j++) {
        sum += arr[j];
        for (let k = j + 1; k < n; k++) {
          sum += arr[k];

          if (sum === 0) res.push([i, j, k]);

          sum -= arr[k];
        }
        sum -= arr[j];
      }
    }

    return res;
  }
}
/**
 * TC --> O(n * n * n)
 * SC --> O(n * n)
 */

// User function Template for javascript
class Solution {
  /**
   * @param {number[]} arr
   * @return {number[][]}
   */
  findTriplets(arr) {
    const n = arr.length;

    const res = [];
    const hash = new Map();
    for (let i = 0; i < n; i++) {
      if (!hash.has(arr[i])) hash.set(arr[i], []);
      hash.get(arr[i]).push(i);
    }

    for (let j = 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const req = -1 * (arr[j] + arr[k]);

        if (hash.has(req)) {
          const data = hash.get(req);

          for (const i of data) {
            if (i < j) res.push([i, j, k]);
          }
        }
      }
    }
    return res.length ? res : [];
  }
}

/**
 * TC --> O(n * n)
 * SC --> O(n * n)
 */
