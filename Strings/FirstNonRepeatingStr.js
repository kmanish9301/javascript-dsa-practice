const str = "aabbcdde";

const findFirstNonRepeatingStr = (str) => {
  let repeatedCharCount = {};
  for (let char of str.toLowerCase()) {
    repeatedCharCount[char] = (repeatedCharCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (repeatedCharCount[char] === 1) return char;
  }

  return null;
};

console.log("findFirstNonRepeatingStr", findFirstNonRepeatingStr(str));
