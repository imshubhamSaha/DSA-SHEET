class Solution {
  altProduct(arr) {
    arr.sort((a, b) => b - a);

    let sum = 0;
    let i = 0,
      j = arr.length - 1;

    while (i < j) {
      sum += arr[i++] * arr[j--];
    }

    return sum;
  }
}
