const str = "aaabbc"; // "a3b2c1"

const stringCompression = (str) => {
  // 1. compare char with next char if same then increase the count and continue checking
  // 2. if not then stop checking and store the element and its count in result

  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      // checking current elements index with next element index === str[char+1] = next element index
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
};

console.log("stringCompression", stringCompression(str));
