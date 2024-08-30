//find subset of array

const backtracking = (orginalArr, result, subsetArr, index) => {
  result.push([...subsetArr]);
  for (let i = index; i < orginalArr.length; i++) {
    subsetArr.push(orginalArr[i]);
    backtracking(orginalArr, result, subsetArr, i + 1);
    subsetArr.pop();
  }
};
const subset = (nums) => {
  let result = [];
  backtracking(nums, result, [], 0);
  return result;
};
console.log(subset([1, 2, 4]));
