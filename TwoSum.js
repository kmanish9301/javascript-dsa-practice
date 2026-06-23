// Two pointers works only when arr is sorted , other wise make it sort and then use two pointers method
// const arr = [1, 2, 3, 4, 4, 5, 6];

// const twoSum = (arr, target) => {
//   let left = 0;
//   right = arr.length - 1;
//   console.info("🚀 ~ right:", right);
//   let results = [];

//   while (left < right) {
//     const sum = arr[left] + arr[right];
//     if (sum === target) {
//       results.push([arr[left], arr[right]]);
//       left++;
//       right--;
//     } else if (sum < target) {
//       left++;
//     } else {
//       right++;
//     }
//   }
//   return results;
// };

// console.log("Two Sum", twoSum(arr, 8));

// Without sorted array
const unSortedArr = [2, 3, 1, 4, 5, 9];

const unSortedTwoPointer = (arr, target) => {
  // Step 1 - Array Sorting (Selection Sort)
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  // step 2 - Two Pointer Method

  let left = 0;
  right = arr.length - 1;

  let results = [];

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      results.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return results;
};

console.log("Two Sum with unsorted array", unSortedTwoPointer(unSortedArr, 7));
