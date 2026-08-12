function findMissingNumber(numbers) {
  const n = numbers.length;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let num of numbers) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

// console.log(findMissingNumber([1, 3, 0])); // 2
// console.log(findMissingNumber([1])); // 0
// console.log(findMissingNumber([3, 0, 4, 2, 1])); // 5
console.log(findMissingNumber([5, 1])); // 5
