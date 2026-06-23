const str = " hello world ";

const lengthOfLastWord = (str) => {
  let removedStr = str.trim();
  let splitedStr = removedStr.split(" ");
  let lastWord = splitedStr[splitedStr.length - 1];

  return lastWord.length;
};

console.log("lengthOfLastWord", lengthOfLastWord(str));
