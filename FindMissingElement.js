const num1 = [1, 4, 2, 5];
const num2 = [7, 8, 6, 9];
const num3 = [5, 1];

const findMissingElement = (numbs) => {
    if (numbs.length === 0) return [];
    let minNum = numbs[0], maxNum = numbs[0];

    for (let i = 1; i < numbs.length; i++) {
        if (numbs[i] > maxNum) {
            maxNum = numbs[i]
        } else if (numbs[i] < minNum) {
            minNum = numbs[i]
        }
    }
    const missingElem = [];

    for (let j = minNum; j <= maxNum; j++) {
        if (!numbs.includes(j)) {
            missingElem.push(j)
        }
    }
    return missingElem;
}

console.log(findMissingElement(num3));