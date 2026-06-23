// Pallindrome Number

const isPalindrome = (num) => {
  const str = num.toString();

  const check = (left, right) => {
    // base case
    if (left >= right) return true;

    // If mismatch
    if (str[left] !== str[right]) return false;

    //move forward
    return check(left + 1, right - 1);
  };
  return check(0, str.length - 1);
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(1221)); // true
