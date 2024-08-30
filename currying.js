// function curry(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(curry(1)(2)(4));

//for infinite arguments

function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}

console.log(sum(2)(3)(4)(10)());

// //polyfil

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}
