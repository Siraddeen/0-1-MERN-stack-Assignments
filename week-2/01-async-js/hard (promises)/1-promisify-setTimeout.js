/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let k = new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  }); //        wrong answer          but    passes all test
  return k;
}
function u() {}
wait(1000).then(u);

// function wait(n) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve, n * 1000);
//     });
//   }

//
//   wait(5).then(function () {
//     console.log("Promise resolved after 5 seconds");                      // correct robust answer
//   });

module.exports = wait;
