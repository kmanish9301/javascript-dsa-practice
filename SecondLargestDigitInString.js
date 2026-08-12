// 1796. Second Largest Digit in a String
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

// Example 2:
// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.

const secondHighest = (str) => {
    const uniqueNum = new Set();
    for (let num of str) {
        if (num >= "0" && num <= "9") {
            uniqueNum.add(Number(num));
        }
    }
    const arr = [...uniqueNum].sort((a, b) => b - a);

    return arr.length >= 2 ? arr[1] : -1;
}

console.log(secondHighest("abc1111"));