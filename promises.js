function async1(shouldReject = false) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async1"));
      resolve(1);
    }, 1000);
  });
  return promise;
}
function async2(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async2"));
      resolve(n * 2);
    }, 1000);
  });
}
function async3(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async3"));
      resolve(n * 3);
    }, 1000);
  });
}
function async4(n, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(new Error("Invalid ops Async4"));
      resolve(n * 4);
    }, 1000);
  });
}

async1(false)
  .then((n) => async2(n, false))
  .then((n) => async3(n, false))
  .then((n) => async4(n, false))
  .then((n) => console.log(n))
  .catch((error) => console.error(error));

async1(false)
  .then((n) =>
    async2(n, false).then((n) =>
      async3(n).then((n) => async4(n).then((n) => console.log(n)))
    )
  )
  .catch((error) => console.error(error));

// Promise API - introduced in ES6
// what is a Promise
// a new promise is created => pending
// if it returns with the requested result/data => resolved
// if it results in an error => rejected
// fullfilled
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 10 + 20;
    resolve(sum);
    // reject(new Error('Invalid operation'));
  }, 1000);
});

promise
  .then((sum) => console.log("promise resolved", sum))
  .catch((error) => console.error("promise rejected", error));
