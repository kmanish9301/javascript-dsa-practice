const nested = [1, [2, [3, 4], 5], 6];

const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
};

console.log(flattenArray(nested));
