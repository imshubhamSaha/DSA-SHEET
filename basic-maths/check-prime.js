/**
 * CHECK PRIME
 */

var checkPrime = function (n) {
  let factors = 0;

  for (let i = 1; i <= n; i++) if (n % i === 0) factors++;

  if (factors === 2) return true;

  return false;
};

/**
 * TIME COMPLEXITY --> O(N)
 * SPACE COMPLEXITY --> CONSTANT
 */
console.log(checkPrime(131));
