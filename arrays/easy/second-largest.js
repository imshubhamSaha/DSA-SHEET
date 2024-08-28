class Solution {
  // Function returns the second largest element
  print2largest(arr) {
    const n = arr.length;
    let second_largest = -1;
    let largest = arr[0];

    for (let i = 1; i < n; i++) {
      if (arr[i] > largest) {
        second_largest = largest;
        largest = arr[i];
      } else if (arr[i] > second_largest && arr[i] < largest)
        second_largest = arr[i];
    }

    return second_largest;
  }
}
