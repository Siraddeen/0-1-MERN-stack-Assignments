/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   let s = str.toLowerCase().split("").join("");
//   let r = s.split("").reverse().join("");
//   if (s == r) return true;                              // my code passed 4 test among  7
// }

function isPalindrome(str) {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}
module.exports = isPalindrome;
