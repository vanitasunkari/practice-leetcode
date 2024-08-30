function palindromeCheck(number) {
    let numStr = number.toString();
    let numArr = numStr.split('');
    return numArr.every((num, index) =>
        num === numArr[numArr.length - 1 - index]);
}


//step 2
function palindromeCheck(number) {
    let numStr = number.toString();
    let length = numStr.length;
    let result = 0;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        result ^= numStr.charCodeAt(i) ^ 
                  numStr.charCodeAt(length - 1 - i);
    }
    return result === 0;
}

//another 
function palindromeCheck(number) {
    let numStr = number.toString();
    return isPalindrome(numStr, 0, numStr.length - 1);
}

function isPalindrome(str, start, end) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
}