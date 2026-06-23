const arr = [10, 5, 1, 12, 9];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  // swap the smallest element to the front
  [([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]])];
}

console.log(arr);
