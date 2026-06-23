const arr = [1, 2, 2, 3, 3, 4, 5, 6, 6];

const removeDuplicates = (arr) => {
  let seen = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    console.log("🚀 ~ i:", i);
    console.log("🚀 ~ seen:", seen);
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
};

// console.log("removeDuplicates", removeDuplicates(arr));

const str = "programming";

const removeDuplicateStr = (str) => {
  let seen = {};
  let duplicateStr = {};
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!seen[str[i]]) {
      seen[str[i]] = true;
      result += str[i];
    } else {
      duplicateStr[str[i]] = true;
    }
  }
  return { unique: result, duplicate: Object.keys(duplicateStr) };
};

console.log("removeDuplicateStr", removeDuplicateStr(str));
