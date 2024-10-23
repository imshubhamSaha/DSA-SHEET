/**
 Problem statement
You are given an integer 'n'. Return 'true' if 'n' is an Armstrong number, and 'false' otherwise.


An Armstrong number is a number (with 'k' digits) such that the sum of its digits raised to 'kth' power is equal to the number itself. For example, 371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371.

 */

var checkArmstrong = function (n) {
  let temp = n;
  let places = 0;

  while (temp > 0) {
    places++;
    temp = Math.floor(temp / 10);
  }

  let armNum = 0;
  temp = n;

  while (temp > 0) {
    armNum += (temp % 10) ** places;
    temp = Math.floor(temp / 10);
  }

  return armNum === n;
};

console.log(checkArmstrong(357));
/**
 * Time Complexity --> log10(n) + log10(n)
 * Space Complexity --> constant
 */
