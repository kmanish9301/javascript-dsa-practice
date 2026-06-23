// Create an array with range of numbers

const rangeOfNumber = (startNum, endNum) => {
  if (endNum < startNum) return [];
  else {
    const numbers = rangeOfNumber(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};

console.log(rangeOfNumber(0, 5));
