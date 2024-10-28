/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  findDuplicates(arr) {
    const n = arr.length;
    const hashSet = new Set();
    const res = [];
    for (let i = 0; i < n; i++) {
      if (hashSet.has(arr[i])) {
        res.push(arr[i]);
        continue;
      }
      hashSet.add(arr[i]);
    }

    return res.sort((a, b) => a - b);
  }
}
/**
 * Time Complexity --> O(nlogn)
 * Space  --> constant;
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  findDuplicates(arr) {
    const n = arr.length;
    const maxElm = Math.max(...arr);
    const hashTable = new Array(maxElm + 1).fill(0);
    const res = [];
    for (let i = 0; i < n; i++) {
      hashTable[arr[i]]++;
    }

    for (let i = 0; i <= maxElm; i++) {
      if (hashTable[i] > 1) res.push(i);
    }

    return res;
  }
}

/**
 * Time Complexity --> O(n)
 * Space  --> O(n);
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  findDuplicates(arr) {
    const n = arr.length;
    const res = [];
    for (let i = 0; i < n; i++) {
      arr[arr[i] % n] += n;
    }

    for (let i = 0; i < n; i++) {
      if (Math.floor(arr[i] / n) > 1) res.push(i);
    }

    return res;
  }
}

/**
 * Time Complexity --> O(n)
 * Space  --> O(1);
 */
