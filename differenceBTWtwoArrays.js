// //Find the Difference of Two Arrays
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

const findDiff = (nums1, nums2) => {
  const [ans1, ans2] = [new Set(), new Set()];
  const len = Math.max(nums1.length, nums2.length);
  for (let i = 0; i <= len - 1; i++) {
    if (!nums2.includes(nums1[i])) {
      ans1.add(nums1[i]);
    }
    if (!nums1.includes(nums2[i])) {
      ans2.add(nums2[i]);
    }
  }
  return [Array.from(ans1), Array.from(ans2)];
};

console.log(findDiff([1, 2, 3], [2, 4, 6]));
