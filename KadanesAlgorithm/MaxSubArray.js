// Ques : Given an integer array nums, find the subarray with the largest sum and return it sum;
// Input : [-2, 1, -3, 4, -1, 2,1, -5, 4]  - - - - -> output : 6, [4, -1, 2,1];
// Input : [5, 4, -1, 7, 8]                - - - - -> output : 23, [5, 4, -1, 7,8];

const maxSubArray = (nums) => {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};
// time complexity is O(n^2)
// console.log("maxSubArray", maxSubArray([5, 4, -1, 7, 8]));

// Kadane's Algorithm

const KAMaxSumArray = (nums) => {
  let sum = 0;
  let maxSum = nums[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
      start = tempStart;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  }
  return {
    maxSum,
    subArray: nums.slice(start, end + 1),
  };
};
console.log("KAMaxSumArray", KAMaxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
