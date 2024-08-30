//search target element in sorted array--> divide array in two parts and search based on mid value of array

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      rightIndex = mid - 1;
    } else if (target > arr[mid]) {
      leftIndex = mid + 1;
    }
  }
  return -1;
}

//recursive

function BstRecursive(arr, target) {
  return search(arr, 0, arr.length - 1, target);
}

function search(arr, left, right, target) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (target === arr[mid]) return mid;
  if (target > arr[mid]) {
    return search(arr, mid + 1, right, target);
  } else if (target < arr[mid]) {
    return search(arr, left, mid - 1, target);
  }
  return -1;
}

console.log(BstRecursive([1, 5, 6, 7, 8], 7));
