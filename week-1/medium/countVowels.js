/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ov = ["a", "e", "i", "o", "u"];
  let lc = str.toLowerCase();
  let ab = 0;

  for (let i = 0; i < lc.length; i++) {
    if (ov.includes(lc[i])) {
      ab++;
    }
  }
  return ab;
}

// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const lowercaseStr = str.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < lowercaseStr.length; i++) {
//     if (vowels.includes(lowercaseStr[i])) {
//       count++;
//     }
//   }
//   return count;
// }

module.exports = countVowels;
