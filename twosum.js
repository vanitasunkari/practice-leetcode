// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (arr, n) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[n - arr[i]] >= 0) {
      return [obj[n - arr[i]], i];
    } else {
      obj[arr[i]] = i;
    }
  }
};
console.log(twoSum([3, 2, 4], 6));
