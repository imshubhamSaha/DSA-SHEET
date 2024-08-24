/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let signed = x < 0;

  if (x < 0) x *= -1;
  let rev_num = 0;
  while (x > 0) {
    let digit = x % 10;
    x = Math.floor(x / 10);

    if (
      rev_num > Math.floor((2 ** 31 - 1) / 10) ||
      (rev_num === Math.floor((2 ** 31 - 1) / 10) && (2 ** 31 - 1) % 10 < digit)
    )
      return 0;
    rev_num = rev_num * 10 + digit;
  }

  return signed ? -rev_num : rev_num;
};
//This function avoids the 64 digit integer;
//TC --> O(log10(num)+ 1), SC --> O(1)
