let arr = [10, 5, 12, 1, 12];
let n = arr.length;

// At every pass:
// Find smallest element
// Put it at correct position

for (let i = 0; i < n - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < n; j++) {
    if (arr[minIndex] > arr[j]) {
      // Finding the smallest element
      minIndex = j;
    }
  }
  if (minIndex != i) {
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}

console.log(arr);
