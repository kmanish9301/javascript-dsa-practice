const str = "Nayan";

const isPallindrome = (str) => {
  let correctStr = str.toUpperCase();
  let reverseString = "";
  for (let i = correctStr.length - 1; i >= 0; i--) {
    reverseString += correctStr[i];
  }

  if (correctStr === reverseString) {
    console.log("This string is pallindrome");
  } else {
    console.log("Not Pallindrome");
  }
};

isPallindrome(str);
