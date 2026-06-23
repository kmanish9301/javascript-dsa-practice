const string1 = "listen";
const string2 = "silent";

const string3 = "rat";
const string4 = "cat";

const string5 = "aabbcc";
const string6 = "abcabc";

const isTwoStringAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let count = {};

  for (let char of str1.toLowerCase()) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2.toLowerCase()) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};

// Here first we are counting the count of the characters occurs
// Then we are removing it and making the count 0 so if count becomes 0 then it is Anagram

console.log("isTwoStringAnagram", isTwoStringAnagram(string5, string6));
