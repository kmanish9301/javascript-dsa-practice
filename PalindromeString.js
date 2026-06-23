const str = "madam";

// const checkStrPallindrome = (str) => {
//   if (str === "") return "Empty String";
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return str === revStr;
// };

const checkStrPallindrome = (str) => str === str.split("").reverse().join("");

console.log(checkStrPallindrome(str));
