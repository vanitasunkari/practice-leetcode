var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let sum = 1,
    max = 1;
  console.log(nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      sum += 1;
      max = Math.max(sum, max);
    } else if (nums[i] - nums[i - 1] !== 1 && nums[i] !== nums[i - 1]) {
      sum = 1;
    }
  }

  return max;
};

console.log(longestConsecutive([1, 2, 0, 1]));
