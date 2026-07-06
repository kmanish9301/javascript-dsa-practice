const haystack1 = "sadbutsad", needle1 = "sad";
const haystack2 = "leetcode", needle2 = "leeto";
const haystack3 = "hello", needle3 = "ll";

const strStr = (haystack, needle) => {

    // for (let i = 0; i < haystack.length; i++) {
    //     for (let i = 0; i < haystack.length; i++) {
    //         if (haystack.substring(i, i + needle.length) === needle) {
    //             return i;
    //         }
    //     }
    // }

    // return -1

    return haystack.indexOf(needle);
}

console.log(strStr(haystack3, needle3));