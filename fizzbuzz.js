//fizzbuzz
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

const fizzbuzz = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 3 === 0) result += "FIZZ";
    if (i % 5 === 0) result += "BUZZ";
    arr.push(result || i);
  }
  return arr;
};
console.log(fizzbuzz(45));
