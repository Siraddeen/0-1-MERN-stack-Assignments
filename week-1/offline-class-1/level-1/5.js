/*   //length
function a(ss) {
  console.log(ss.length);
}
let f = a("jnfas dfcads f vd vfsd vd");
*/

/*     // indexOf          -----     lastIndexOf
function a(jj, d) {
  console.log(jj.indexOf(d)); // for last asd use lastIndexOf
}
console.log(a("hacsi asd asd", "asd"));
*/

/*    // slice
function ml(a, b, c) {
  console.log("original one : ", a);
  console.log("after slicing : ", a.slice(b, c));
}
let d = ml("hello every one", 0, 7);

// console.log("okasari".slice(0, 3));
*/

/*        // replace
function repla(a, b, c) {          // a ----> original one               b --------> target one          c ----------->   replace one     
  console.log("original string : ", a);
  console.log("replaced string : ", a.replace(b, c));
  return a.replace(b, c);
}
let g = repla("hello all are you ok", "are you", "you are");
console.log(g);

//let d = "hj io pp ll";
//console.log(d.replace("io", "qc"));
*/

// let f = "he kjaf janfjk dhafjhaf";
// console.log(f.split(" "));

// ---------------------------------------------Arays
/*
let a = [12, 12, 3, 5];
let b = [22, 124, 34, 15];
let v = a.concat(b);
console.log(v);
*/

let a = [1, 2, 4];
function logthings(str) {
  console.log(str + "ok ");
}
a.forEach(logthings);
