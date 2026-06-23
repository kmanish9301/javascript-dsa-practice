// Linear Search

const arr = [1, 2, 3, 4, 5, 6];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log("Linear Search", linearSearch(arr, 4));

// const binarySearch = (arr, target) => {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) return mid;

//     if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// };

// console.log("Binary Search", binarySearch(arr, 2));

// Find Max

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log("Find Max", findMax(arr));

// const reversedArray = (arr) => {
//   let revArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revArr.push(arr[i]);
//   }
//   return revArr;
// };
// console.log("Reversed Array", reversedArray(arr));

// What is the Two-Pointer Technique?
// It’s an algorithmic strategy where you use two indexes (pointers) to traverse an array (or string).
// Instead of using nested loops, two pointers can often solve problems more efficiently.
// One pointer usually starts from the left (beginning).
// The other pointer usually starts from the right (end).
// Sometimes both move in the same direction (sliding window).
// Sometimes they move toward each other (converging).
// 👉 Goal: reduce time complexity from O(n²) to O(n).

// 📌 Example 2: Two-Sum in Sorted Array
// Find if two numbers add up to a target.

const twoSum = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  let result = [];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

console.log("Two Sum in sorted array", twoSum([1, 2, 3, 4, 5, 6], 8));

// Remove duplicate from an array

const removeDuplicates = (arr) => {
  let seen = {};
  let result = [];

  for (let val of arr) {
    if (!seen[val]) {
      seen[val] = true;
      result.push(val);
    }
  }
  return result.sort((a, b) => a - b);
};
console.log(removeDuplicates([3, 1, 2, 3, 2, 4, 1]));

const removeDuplicatesTwoPointer = (arr) => {
  if (arr.length === 0) return [];

  let i = 0; // last unique element index;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  //return only unique part
  return arr.slice(0, i + 1);
};

// Sorted Array
console.log(
  "Remove duplicates from array using the two pointers",
  removeDuplicatesTwoPointer([1, 1, 2, 3, 4, 5, 5]),
);
