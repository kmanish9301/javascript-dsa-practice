const str = "Javascript";

const countOfVowels = (str) => {
  let result = {};
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  }
  return result;
};

console.log("countOfVowels", countOfVowels(str));
