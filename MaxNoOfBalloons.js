const text1 = "nlaebolko";
const text2 = "loonbalxballpoon";
const text3 = "leetcode";

const maxNoOfBalloon = (text) => {
    let countOccur = {};
    let maxCount = 0;
    for (let char of text) {
        countOccur[char] = (countOccur[char] || 0) + 1;
    }

    maxCount = Math.min(
        countOccur["b"],
        countOccur["a"],
        Math.floor(countOccur["l"] / 2),
        Math.floor(countOccur["o"] / 2),
        countOccur["n"]
    ) || 0;
    console.log("countOccur", countOccur);
    return maxCount;
}

console.log(maxNoOfBalloon(text3));