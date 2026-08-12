const arr = [0, 1, 0, 3, 12];

const shiftZerosToEnd = (arr) => {
    const result = [];
    let zeroCount = 0;

    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }

    while (zeroCount > 0) {
        result.push(0);
        zeroCount--
    }
    return result;
}

console.log(shiftZerosToEnd(arr));