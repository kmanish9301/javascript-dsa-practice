const text = "JavaScript is powerful and flexible scripting language";

const findLongestText = (txt) => {
  let splitWord = txt.split(" ");
  let longest = "";
  for (let word of splitWord) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};

// if not given space in between "" then it will split individual char ["J", "A"] like this instead of ["Javascript", "is"]

console.log("findLongestText", findLongestText(text));
