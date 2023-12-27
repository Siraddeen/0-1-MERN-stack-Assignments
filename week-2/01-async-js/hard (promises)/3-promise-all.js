/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// function wait1(t) {}

// function wait2(t) {}

// function wait3(t) {}

// function calculateTime(t1, t2, t3) {}

// function wait1(t) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Wait1 resolved after ${t} seconds`);
//     }, t * 1000);
//   });
// }

// function wait2(t) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Wait2 resolved after ${t} seconds`);
//     }, t * 1000);
//   });
// }

// function wait3(t) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Wait3 resolved after ${t} seconds`);
//     }, t * 1000);
//   });
// }

// function calculateTime(t1, t2, t3) {
//   const startTime = Date.now();

//   const promise1 = wait1(t1);
//   const promise2 = wait2(t2);
//   const promise3 = wait3(t3);

//   return Promise.all([promise1, promise2, promise3])
//     .then(() => {
//       const endTime = Date.now();
//       const totalTime = endTime - startTime;
//       return totalTime;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       throw error; // Re-throw the error for further handling if needed
//     });
// }

function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Wait1 resolved after " + t + " seconds");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Wait2 resolved after " + t + " seconds");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Wait3 resolved after " + t + " seconds");
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  var startTime = Date.now();

  var promise1 = wait1(t1);
  var promise2 = wait2(t2);
  var promise3 = wait3(t3);

  return Promise.all([promise1, promise2, promise3]).then(function () {
    var endTime = Date.now();
    var totalTime = endTime - startTime;
    return totalTime;
  });
}

module.exports = calculateTime;
