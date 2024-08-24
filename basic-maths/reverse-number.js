var reverseInteger = function (num) {
  let rev_num = 0;
  let temp = num;

  while (temp > 0) {
    rev_num = rev_num * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return rev_num;
};
//TC -> O(log10(n)), SC -> O(1)
console.log(reverseInteger(123400));
