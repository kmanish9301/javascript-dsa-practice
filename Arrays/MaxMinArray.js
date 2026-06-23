const arr = [0, 2, 3, 4, 35, 26];

const MinMaxNumberArray = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min, max };
};

console.log("MinMaxNumberArray", MinMaxNumberArray(arr));

// const arr = [0, 2, 3, 4, 35, 26];

// const MinMaxNumberArray = (arr) => {
//   let min = arr[0];
//   let maxDiff = 0;

//   for (let i = 1; i < arr.length; i++) {
//     const current = arr[i];

//     // calculate diff
//     let diff = current - min;

//     // update maxDiff
//     if (diff > maxDiff) {
//       maxDiff = diff;
//     }

//     // update min
//     if (current < min) {
//       min = current;
//     }
//   }

//   return { maxDiff };
// };

// console.log("Result:", MinMaxNumberArray(arr));
