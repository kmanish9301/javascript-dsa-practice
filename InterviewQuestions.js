// const arr = [1, 2, 3, 3, 4, 5, 5, 6];

// const removeDuplicates = (arr) => {
//   const isSeen = {};
//   const result = [];
//   for (let i of arr) {
//     if (!isSeen[i]) {
//       isSeen[i] = true;
//       result.push(i);
//     }
//   }
//   return result;
// };

// const removeDuplicates = (arr) => {
//   const result = [];
//   for (let i = 0; i <= arr.length; i++) {
//     let isSeen = false;
//     for (let j = 0; j <= result.length; j++) {
//       if (arr[i] === result[j]) {
//         isSeen = true;
//         break;
//       }
//     }
//     if (!isSeen) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// const removeDuplicates = (arr) => [...new Set(arr)];

// console.log("removeDuplicates", removeDuplicates(arr));

// ===============================================================================================
// ===============================================================================================
// const armNumber = 153;
// const isNumberArmstrong = (n) => {
//   let numStr = n.toString();
//   let power = numStr.length;
//   let sum = 0;
//   for (let digit of numStr) {
//     sum += Math.pow(Number(digit), power);
//   }
//   return sum === n;
// };
// console.log("isNumberArmstrong:", isNumberArmstrong(armNumber));

// ✔️ Print Armstrong numbers in a range
const printArmstrongNumbers = (limit) => {
  for (let i = 1; i <= limit; i++) {
    let numStr = i.toString();
    let power = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
      sum += Math.pow(Number(digit), power);
    }

    if (sum === i) {
      console.log(i);
    }
  }
};

printArmstrongNumbers(10000);
// ===============================================================================================
// ===============================================================================================

// const fibonacci = (n) => {
//   let a = 0,
//     b = 1;

//   for (let i = 0; i < n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// };

// fibonacci(5);
