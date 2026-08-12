const arr = [16, 17, 4, 3, 5, 2]
// const arr = [10, 4, 2, 4, 1]

const arrayLeader = (arr) => {
    const result = [];
    const finalResult = [];
    let maxNumber = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] >= maxNumber) {
            result.push(arr[i]);
            maxNumber = arr[i];
        }
    }
    for (let j = result.length - 1; j >= 0; j--) {
        finalResult.push(result[j]);
    }

    return finalResult

}

console.log(arrayLeader(arr));