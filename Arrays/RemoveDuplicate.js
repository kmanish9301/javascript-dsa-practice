const arr = [1, 1, 2, 3, 4, 5, 1];

const removeDuplicate = (arr) => {
  let uniqueElements = [];
  isSeen = {};
  for (let ele of arr) {
    if (!isSeen[ele]) {
      isSeen[ele] = true;
      uniqueElements.push(ele);
    }
  }
  return uniqueElements;
};

console.log("removeDuplicate", removeDuplicate(arr));
