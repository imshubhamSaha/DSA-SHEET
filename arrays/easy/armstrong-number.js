/**
 Problem statement
You are given an integer 'n'. Return 'true' if 'n' is an Armstrong number, and 'false' otherwise.


An Armstrong number is a number (with 'k' digits) such that the sum of its digits raised to 'kth' power is equal to the number itself. For example, 371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371.

 */

var checkArmstrong = function (n) {
  if (n < 0) return false;

  let temp = n;
  let res = 0;
  let digit = 0;
  while (temp) {
    digit++;
    temp = Math.floor(temp / 10);
  }

  temp = n;
  while (temp > 0) {
    res += (temp % 10) ** digit;
    temp = Math.floor(temp / 10);
  }

  return res === n;
};

console.log(checkArmstrong(371));
