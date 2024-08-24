/**
 Problem Statement: Given an integer N, return the number of digits in N.

Examples
Example 1:
Input:N = 12345
Output:5
Explanation:  The number 12345 has 5 digits.
Example 2:
Input:N = 7789
Output: 4
Explanation: The number 7789 has 4 digits.
 */
//Extracting digits by converting it into string and iterating  over it and get it.
var countDigits = (n) => n.toString().length;
//TC -> O(n) , SC - >O(n);

//Extracting digits simply by modulo operation by 10.so we extracted the  last digit.
var countDigit = function (n) {
  var count = 0;

  while (n > 0) {
    count++;
    n = parseInt(n / 10);
  }
  return count;
};
//TC -> O(logn), SC -> O(1)
//Function to get log value of any base
var getBaseLog = (x, y) => Math.log(y) / Math.log(x);
//Extracting No of digits in Integer.
var countDig = (n) => parseInt(getBaseLog(10, n)) + 1;
//TC O(1) , SC O(1)l
console.log(countDig(7778));
