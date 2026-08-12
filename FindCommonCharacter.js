const words = ["bella", "label", "roller"];

const findCommonWord = (arr) => {
    let allFrequency = [];

    for (let word of words) {
        let freq = {};

        for (let char of word) {
            freq[char] = (freq[char] || 0) + 1;
        }

        allFrequency.push(freq);
    }

    let result = [];

    for (let char in allFrequency[0]) {
        let min = Infinity;

        for (let freq of allFrequency) {
            min = Math.min(min, freq[char] || 0);
        }

        while (min > 0) {
            result.push(char);
            min--;
        }
    }

    return result;
}

console.log(findCommonWord(words));