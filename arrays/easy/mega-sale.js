class Solution {
  maxProfit(m, arr) {
    const n = arr.length;
    let maxProfit = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < m; i++) {
      if (arr[i] > 0) return maxProfit;

      maxProfit += arr[i] * -1;
    }

    return maxProfit;
  }
}
