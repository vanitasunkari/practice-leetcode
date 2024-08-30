//Power of three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

function powerOfThree(n) {
  if (n == 0) return false;
  if (n == 1) return true;
  if (n % 3 == 0) {
    return powerOfThree(n / 3);
  }
  return false;
}

console.log(powerOfThree(27));
