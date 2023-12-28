function countVowels(str) {
  let ov = ["a", "e", "i", "o", "u"];
  let lc = str.toLowerCase();
  let a = 0;

  for (let i = 0; i < lc.length; i++) {
    if (ov.includes(lc[i])) {
      a++;
    }
    return a;
  }
}

let j = countVowels("acnee");
console.log(j);
