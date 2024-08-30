//move zeros at end
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(inp) {
  for (let i = inp.length; i--; ) {
    if (inp[i] === 0) {
      inp.splice(i, 1);
      inp.push(0);
    }
  }
  return inp;
}
console.log(moveZeros([0, 1, 0, 0, 3, 12]));
