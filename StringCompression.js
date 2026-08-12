// Implement string compression (e.g., "aaabbc" → "a3b2c1").

const strCompression = (str) => {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count
}
console.log(strCompression("aaabbc"));