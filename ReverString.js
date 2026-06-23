const str = "Hello";

// 1. for loop
// const reverseString = (str) => {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   console.log(result);
// };

// 2. built in methods

// str.split("")
// split is a String method. When you pass an empty string "" as the separator, it splits the string into an array of characters (technically, string iterated elements).
// Example: "Hello".split("") → ["H","e","l","l","o"].

// .reverse()
// reverse is an Array method that reverses the array in place and returns the same array (now reversed).
// So ["H","e","l","l","o"].reverse() → ["o","l","l","e","H"].

// .join("")
// join is an Array method that concatenates array elements into a single string using the provided separator. With "" it concatenates them with no separator.
// ["o","l","l","e","H"].join("") → "olleH".

// So the full pipeline transforms "Hello" → ["H","e","l","l","o"] → ["o","l","l","e","H"] → "olleH".̉

// concise return
// const reverseString = (str) => str.split("").reverse().join("");

const reverseString = (str) => {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
  return reversed;
};
reverseString(str);
