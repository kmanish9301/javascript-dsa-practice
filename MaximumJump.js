const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]; // Output = 3
const arr1 = [1, 4, 3, 2, 6, 7]; // output = 2
const arr2 = [0, 10, 20]; //Output = -1

const maximumJump = (arr) => {
    if (arr[0] === Number(0)) return -1;
    let jumps = 0;
    let currentVal = 0;

    while (currentVal < arr.length - 1) {
        currentVal += arr[currentVal];
        jumps++;
    }

    return jumps;
}

console.log(maximumJump(arr2));