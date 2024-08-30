// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ""
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

//approach 1 without sort
const longestCommonPrefix = (arr) => {
  if (arr.length < 0) return null;
  let prefix = "",
    char;
  for (let i = 0; i < arr[0].length; i++) {
    char = arr[0][i];
    if (arr.every((item) => item[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  return prefix;
};

//approach 2 with sort

const longestPrefix = (arr) => {
  if (arr.length < 0) return null;
  if (arr.length === 1) return arr[0];
  arr.sort();
  let firstStr = arr[0];
  let secondStr = arr[arr.length - 1];
  let prefix = "";

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] == secondStr[i]) {
      prefix += firstStr[i];
    } else {
      break;
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
