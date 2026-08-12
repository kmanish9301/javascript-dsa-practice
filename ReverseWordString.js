const str = "Let's take LeetCode contest";

const reverseWords = (str) => {
    let result = "";
    let word = "";

    for (let i = 0; i <= str.length; i++) {
        if (i === str.length || str[i] === " ") {
            // Reverse
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j];
            }
            // Add a space if we're not at the end  
            if (i !== str.length) {
                result += " ";
            }
            // Reset for the next word
            word = "";
        } else {
            word += str[i]
        }
    }
    return result;
}

console.log(reverseWords(str));