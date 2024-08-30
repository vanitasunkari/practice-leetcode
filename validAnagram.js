//valid Anagram check

const validAnagram = (str1, str2) => {
  const str1Count = {},
    str2Count = {};
  if (str1.length != str2.length) return false;

  for (let i of str1) {
    str1Count[i] = (str1Count[i] || 0) + 1;
  }
  for (let i of str2) {
    str2Count[i] = (str2Count[i] || 0) + 1;
  }
  for (let k in str1Count) {
    if (str1Count[k] !== str2Count[k]) return false;
  }
  return true;
};

console.log(validAnagram("aacc", "ccac"));
