const n = 3;

//     *         
//   *   *
// *       *
//   *   *
//     * 


const hallowDiamond = (n) => {
    // Upper diamond
    for (let row = 1; row <= n; row++) {
        let pattern = "";
        for (let space = 1; space <= n - row; space++) {
            pattern += " ";
        }
        for (let col = 1; col <= row; col++) {
            if (col === 1 || col === row) {
                pattern += "* "
            } else {
                pattern += "  "
            }
        }
        console.log(pattern)
    }

    // Bottom diamond
    for (let row = n; row >= 1; row--) {
        let pattern = "";
        for (let space = 1; space <= n - row; space++) {
            pattern += " ";
        }

        for (let col = row; col >= 1; col--) {
            if (col === 1 || col === row) {
                pattern += "* ";
            } else {
                pattern += "  ";
            }
        }
        console.log(pattern);
    }
}

hallowDiamond(n);