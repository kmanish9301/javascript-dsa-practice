const nums1 = [3, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 2];

const majorityElements = (nums) => {
    let counts = {}

    for (let char of nums) {
        counts[char] = (counts[char] || 0) + 1;

        if (counts[char] > nums.length / 2) {
            return char;
        }
    }
}

console.log(majorityElements(nums1));
