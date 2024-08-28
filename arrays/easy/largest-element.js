class Solution {
  /**
    * @param number[] arr

    * @returns number
    */
  largest(arr) {
    const n = arr.length;
    let maxi = arr[0];
    for (let i = 1; i < n; i++) {
      if (arr[i] > maxi) maxi = arr[i];
    }
    return maxi;
  }
}
