const arr = [1, 2, 2, 3, 4, 5, 6, 4, 5];

// 1. using for of loop
const removeDuplicates = (arr) => {
  let uniqueArray = [];
  let seen = {};

  for (let val of arr) {
    if (!seen[val]) {
      seen[val] = true;
      uniqueArray.push(val);
    }
  }
  return uniqueArray.sort((a, b) => a - b);
};

// 2. Using Include method
// const removeDuplicate = (arr) => {
//   const result = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(removeDuplicate(arr));

// 3. using filter
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// const removeDuplicate = arr.filter((val, index) => arr.indexOf(val) === index);
// console.info("🚀 ~ removeDuplicate:", removeDuplicate(arr));

// const removeDuplicates = (arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < result.length; j++) {
//       if (arr[i] === result[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (!isDuplicate) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

console.log(removeDuplicates(arr));
