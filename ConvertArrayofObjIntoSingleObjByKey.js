const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const obj = arr.reduce((acc, curr) => {
  console.log(acc, curr);
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(obj);
// { '1': { id: 1, name: 'John' }, '2': { id: 2, name: 'Jane' } }
