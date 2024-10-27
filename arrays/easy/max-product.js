class Solution {
  maxProduct(arr) {
    const n = arr.length;
    let i = 0,
      j = n - 1;
    let maxProduct = 0;
    while (i < j) {
      const prod = arr[i] * arr[j];
      maxProduct = Math.max(maxProduct, prod);

      if (arr[i] < arr[j]) i++;
      else j--;
    }

    return maxProduct;
  }
}
/**
 * Time Complexity --> o(n)
 * Space COmplexity -->> constant
 */
