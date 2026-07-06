const str1 = "aaAbcBC";
const str2 = "abBCab";
const str3 = "abc";

const countSpecialCharacter = (str) => {
    let uniqueStr = new Set(str);
    let count = 0;

    for (let char of uniqueStr) {
        if (char === char.toLowerCase() && uniqueStr.has(char.toUpperCase())) {
            count++;
        } else {
            count;
        }
    }

    return count;
}

console.log(countSpecialCharacter(str2));