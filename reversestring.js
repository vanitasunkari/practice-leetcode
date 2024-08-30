//reverse string

const reverseArr = (arr) => {
  if (arr.length < 0) return;
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

console.log(reverseArr(["h", "e", "l", "l", "o"]));
