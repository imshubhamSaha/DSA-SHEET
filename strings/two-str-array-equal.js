/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  const firstStr = word1.join("");
  const secondStr = word2.join("");

  return firstStr === secondStr;
};
