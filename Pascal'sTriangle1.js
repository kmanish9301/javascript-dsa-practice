// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

const pascalsTriangle = (n) => {
    let result = [];
    // first row
    result.push([1]);
    for (let i = 1; i < n; i++) {
        const previousRow = result[i - 1];
        const currentRow = [1];
        console.log("🚀 ~ currentRow:", currentRow)

        // middle element
        for (let j = 1; j < previousRow.length; j++) {
            currentRow[j] = previousRow[j - 1] + previousRow[j];
        }

        //last element
        currentRow.push(1);

        result.push(currentRow);

    }
    return result;
}

console.log(pascalsTriangle(5));

// const pascalsTriangle = (n) => {
//     let result = [];

//     for (let i = 0; i < n; i++) {
//         const row = [];

//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || j === i) {
//                 row.push(1);
//             } else {
//                 row.push(result[i - 1][j - 1] + result[i - 1][j])
//             }
//         }
//         result.push(row);
//     }
//     return result;
// }

// console.log(pascalsTriangle(5));