// 1. Triangle
//     *
//    *  *
// *   *   *
const printTriangle = (totalRows) => {
  for (let i = 1; i <= totalRows; i++) {
    let pattern = "";

    // 1️⃣ Add spaces first
    for (let j = 1; j <= totalRows - i; j++) {
      pattern += " ";
    }

    // 2️⃣ Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }

    // 3️⃣ Print one complete row
    console.log(pattern);
  }
};
// console.log("printTriangle", printTriangle(4));

// 2. 1
//    1 2
//    1 2 3
//    1 2 3 4

const printSteps = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    console.log(pattern);
  }
};
// printSteps(10);

// 3. Print Star Steps
// *
// * *
// * * *
// * * * *

const printStarSteps = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let pattern = " ";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
};
// printStarSteps(5);

// 4. Right-Aligned Star Pyramid
//     *
//    **
//   ***
//  ****
// *****

const printRightAlignedStarPyramid = (n) => {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    //  for space
    for (let j = 1; j <= n - i; j++) {
      pattern += "  ";
    }

    for (let m = 1; m <= i; m++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
};

// printRightAlignedStarPyramid(5);

// 5. Triangle Pattern
// 1
// 2 3
// 4 5 6
// 7 8 9 10

const printTriangleIncrement = (n) => {
  let variable = 1;
  for (let i = 1; i <= n; i++) {
    let pattern = ""; //resting the pattern after every iteration
    for (let j = 1; j <= i; j++) {
      pattern += variable + " ";
      variable++;
    }
    console.log(pattern.trim());
  }
};

// printTriangleIncrement(4);

// 6. Reverse Triangle
// 12345
// 1234
// 123
// 12
// 1

const reverseTriangle = (n) => {
  for (let i = n; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    console.log(pattern);
  }
};
// reverseTriangle(5);

// 7. Number Pyramid Pattern
//     1
//    123
//   12345
//  1234567
// 123456789

const numPyramidPatter = (n) => {
  for (let i = 1; i <= n; i++) {
    let pattern = " ";
    // for space
    for (let j = 1; j <= n - i; j++) {
      pattern += "  ";
    }

    for (let m = 1; m <= 2 * i - 1; m++) {
      pattern += m + " ";
    }
    console.log(pattern);
  }
};
// numPyramidPatter(5);

// 8. Number Pyramid Pattern
//   1
//  234
// 56789

const numPyramidPattern = (n) => {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += num;
      num++;
    }
    console.log(pattern);
  }
};

// numPyramidPattern(5);

// 9. Square Star Pattern
// *****
// *****
// *****
// *****
// *****

const squareStarPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= n; j++) {
      // pattern += j + " ";
      pattern += "* ";
    }
    console.log(pattern);
  }
};
// squareStarPattern(5);

// 10. Hollow Square Star Pattern
// *****
// *   *
// *   *
// *   *
// *****

const hallowSquStarPattern = (n) => {
  for (let row = 1; row <= n; row++) {
    let pattern = "";

    for (let col = 1; col <= n; col++) {
      if (row === 1 || row === n) {
        pattern += "* ";
      } else {
        if (col === 1 || col === n) {
          pattern += "* ";
        } else {
          pattern += "  ";
        }
      }
    }
    console.log(pattern);
  }
};

// hallowSquStarPattern(5);

// 11. Reverse Triangle
// 54321
// 5432
// 543
// 54
// 5

const reverseNumberTriangle = (n) => {
  for (let row = 1; row <= n; row++) {
    let pattern = "";
    for (let col = n; col >= row; col--) {
      pattern += col + " ";
    }
    console.log(pattern);
  }
};
// reverseNumberTriangle(5);

//12. Reverse Triangle — II

// 54321
// 4321
// 321
// 21
// 1

const reverseTriangleIncrementNum = (n) => {
  for (let row = n; row >= 1; row--) {
    let pattern = "";
    for (let col = row; col >= 1; col--) {
      pattern += col + " ";
    }
    console.log(pattern);
  }
};
// reverseTriangleIncrementNum(5);

// 13. Hollow Triangle Star Pattern
// *
// * *
// *   *
// *     *
// * * * * *

const hollowTriangleStarPattern = (n) => {
  for (let row = 1; row <= n; row++) {
    let pattern = "";

    for (let col = 1; col <= row; col++) {
      if (row === 1 || row === n) {
        pattern += "* ";
      } else {
        if (col === 1 || col === row) {
          pattern += "* ";
        } else {
          pattern += "  ";
        }
      }
    }

    // For the last row: add one extra star
    // if (row === n) pattern += "*";

    console.log(pattern);
  }
};

// hollowTriangleStarPattern(5);

// 14. Enter rows for Hollow Inverted Right-Angled Triangle: 6
// * * * * * *
// *       *
// *     *
// *   *
// * *
// *

const invertedHollowTriangle = (n) => {
  for (let row = n; row >= 1; row--) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
      if (row === 1 || row === n) {
        pattern += "* ";
      } else {
        if (col === 1 || col === row) {
          pattern += "* ";
        } else {
          pattern += "  ";
        }
      }
    }
    console.log(pattern);
  }
};
// invertedHollowTriangle(5);

// 15. Enter rows for Hollow Left-Aligned Triangle: 5
//         *
//       * *
//     *   *
//   *     *
// * * * * *

// const rightAlignHollowTriangle = (n) => {
//   for (row = 1; row <= n; row++) {
//     let pattern = "";
//     for (let space = 1; space <= n - row; space++) {
//       pattern += "  ";
//     }
//     for (let col = 1; col <= row; col++) {
//       if (col === 1 || col === row || row === n) {
//         pattern += "* ";
//       } else {
//         pattern += "  ";
//       }
//     }
//     console.log(pattern);
//   }
// };

const rightAlignHollowTriangle = (n) => {
  for (let row = 1; row <= n; row++) {
    const parts = [];

    // leading spaces
    parts.push("  ".repeat(n - row));

    // body: push either "* " or "  "
    for (let col = 1; col <= row; col++) {
      parts.push(col === 1 || col === row || row === n ? "* " : "  ");
    }

    console.log(parts.join(""));
  }
};

// rightAlignHollowTriangle(5);

// 16.Enter rows for Inverted Pyramid Pattern: 5
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

const inversePyramid = (n) => {
  for (let row = n; row >= 1; row--) {
    let pattern = "";
    // add space
    for (let space = 1; space <= n - row; space++) {
      pattern += "  ";
    }
    // print stars
    for (let col = 1; col <= 2 * row - 1; col++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
};
// inversePyramid(5);
