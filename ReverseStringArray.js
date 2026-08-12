const str = ["h", "e", "l", "l", "o"];

const reverseString = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
    }
}

console.log(reverseString(str));