/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const n = s.length;
  const m = t.length;
  let idx = 0;
  let i = 0;
  while (i < m && idx < n) {
    if (s[idx] === t[i]) {
      idx++;
    }
    i++;
  }

  return idx === n;
};
