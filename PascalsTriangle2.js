// Pascal's Triangle II
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

const pascalsTriangle = (n) => {
    let rowOfIndex = [];
    rowOfIndex.push([1]);
    for (let i = 1; i <= n; i++) {
        const previousRow = rowOfIndex[i - 1];
        const currentRow = [1];
        for (let j = 1; j < previousRow.length; j++) {
            currentRow[j] = previousRow[j - 1] + previousRow[j];
        }
        currentRow.push(1);
        rowOfIndex.push(currentRow);
    }
    return rowOfIndex[n];
}

console.log(pascalsTriangle(3));