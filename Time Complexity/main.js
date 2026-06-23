function printBoth(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  return -1;
}
// n^2 operations ===== O(n^2)
console.log(printBoth(3));
