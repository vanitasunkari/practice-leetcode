// The MUL function is a miniature of the multiplication function. In this function, we call the function that required an argument as a first number, and that function calls another function that required another argument and this step goes on.

// The first function’s argument is x, the second function`s argument is y and the third is z, so the return value will be xyz.

// Syntax:

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
