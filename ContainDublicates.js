const arr1 = [1, 2, 3, 1];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const containDuplicates = (arr) => {
  let seen = {};
  for (let ele of arr) {
    if (seen[ele]) {
      return true;
    }
    seen[ele] = true;
  }
  return false;
};
console.log(containDuplicates(arr2));
