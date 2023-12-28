/*            // real class example
class Animal {
  constructor(name, leg, speak) {
    this.name = name;
    this.leg = leg;
    this.speak = speak;
  }
  talk() {
    console.log("hello you : " + this.speak);
  }
}
let dog = new Animal("dog", 4, "bow bow");

dog.talk();

//console.log(dog);


*/

/*          // my analogy
class op {
  constructor(age, subject, experience) {
    this.age = age;
    this.subject = subject;
    this.experience = experience;
  }
  tech() {
    console.log("your subject is " + this.subject);
  }
}

let hari = new op(40, "maths", 16);

hari.tech();

*/

/*                                             // date with time
let da = new Date();

let d = da.getMonth() + 1;
let dd = da.getDate();
let ddd = da.getFullYear();
let h = da.getHours();
let hh = da.getMinutes();
let hhh = da.getSeconds();

console.log(
  `  The current date is ${dd}-${d}-${ddd} & , \n        The current time is ${h}:${hh}:${hhh}`
);
console.log(da.getTime());

*/

/*                                                //  time difference among 2 code 

function sumi() {
  let a = 0;
  for (let i = 0; i < 1000012100; i++) {
    a = a + i;
  }
}
let d = new Date();
let bef = d.getTime(); // before
sumi();
let dd = new Date();
let af = dd.getTime(); // after

console.log(af - bef);

//------------------------------------------------------------------------------------------------------

function sum(n) {
  let a = 0;
  for (let i = 0; i < n; i++) {
    a = a + i;
  }
}

function measureTime(n) {
  let bef = performance.now();
  sum(n);
  let af = performance.now();

  console.log(`Time taken for n = ${n}: ${af - bef} milliseconds`);
}

// Test with different values of n
measureTime(1000000);
measureTime(10000000);
measureTime(100000000);
*/

/*                                //   Stop Watch

function t() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  console.log(`${h}:${m}:${s}`);
}
setInterval(t, 1600);

*/

/*                         //            JSON             parse    &   stringify

const h = '{"age":21,"name":"sir","book":"saongaf"}';

let user = JSON.parse(h);
console.log(user);                     // from    string   to    object
console.log(user["name"]);

let student = {
  fname: "david",
  age: 23,
  goal: "manga",
};                                         // from object  to  string

let p = JSON.stringify(student);
console.log(p);


*/
