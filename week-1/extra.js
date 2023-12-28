/*             // calculate sum from 0-100

let a = 0;
for (let i = 0; i <= 100; i++) {
  a += i;
  console.log(a);
}
console.log(`The sum is : ${a}`);

*/

/*                // function calling other function
function a(m) {
  return m * m;
}

function b(e, r) {
  let vv = a(e);
  let nn = a(r);
  return vv + nn;
}

console.log(b(2, 3));
*/

/*                                         // async
function asss(n) {
  let a = 0;
  for (let i = 0; i < n; i++) {
    a += i;
  }
  return a;
}
function a() {
  return asss(1000000000);
}
setTimeout(a, 1000);
console.log("hellll");
*/

/*                          //           async api

let d = require("fs"); //   fs      is inbuild  api  known as   filesystem

d.readFile("c.txt", "utf-8", function (err, data) {
  console.log(data); // 2 operation
});

console.log("ok"); // 1 operation
*/

/*                                              //          Async   using    Promises

let a = 8;
let b = 5;
function di() {
  return new Promise(function (resec) {
    let j = a * b;
    resec(j);
  });
}
function sa(ff) {
  // see anither example in level-1-txt
  console.log(ff);
}

di().then(sa);

*/

                                            // understanding
let d = new Promise(function (re) {
  re("hello ra");
});

console.log(d);

function f(k) {
  console.log(k);
}

d.then(f);

