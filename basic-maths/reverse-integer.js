/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const sign = x < 0 ? -1 : 1;
  let num = Math.abs(x);
  let rev_num = 0;

  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (rev_num * sign < -Math.pow(2, 31) || rev_num * sign > Math.pow(2, 31) + 1)
    return 0;
  return rev_num * sign;
};

//TC --> O(log10(num)+ 1), SC --> O(1)
